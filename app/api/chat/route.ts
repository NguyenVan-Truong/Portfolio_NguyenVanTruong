import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const createModel = () => {
  const apiKey = "AIzaSyCVCwrthBlPqOJwK5cworfz7Snz7qf4VHw"; // process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Bạn chưa cấu hình biến môi trường GEMINI_API_KEY.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ model: "gemini-flash-latest" });
};

export async function GET() {
  try {
    createModel();
    return NextResponse.json({ message: "Use POST to chat" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = createModel();

    const systemPrompt = `
      Bạn là một trợ lý ảo thông minh và thân thiện của Nguyễn Văn Trường (anh Trường). 
      Trường là một Frontend Developer với 1 năm kinh nghiệm. 
      Bạn hãy trả lời các câu hỏi của người dùng về Trường dựa trên các thông tin sau:
      - Tên: Nguyễn Văn Trường.
      - Vai trò: Frontend Developer.
      - Kinh nghiệm: 1 năm (từ 9/2024 - 1/2026 tại Hacom).
      - Kỹ năng: HTML, CSS, TypeScript, React.js, Next.js, TailwindCSS, Bootstrap, Sass, Git, Figma, Canva.
      - Dự án đã làm: Pos Hacom , Dịch Vụ Tốt , Web Admin. Các dự án này thường sử dụng React.js, Next.js, Tailwind CSS và tích hợp API.
      - Mục tiêu: Tìm kiếm cơ hội Fresher hoặc Junior Developer.
      - Tính cách: Nhiệt huyết, đam mê tạo ra trải nghiệm người dùng tuyệt vời.
      Lưu ý:
      - Nếu người dùng hỏi các vấn đề không liên quan đến Trường hoặc lập trình, hãy trả lời một cách lịch sự rằng bạn được thiết kế để hỗ trợ thông tin về Trường và các dự án của anh ấy.
      - Trả lời ngắn gọn, súc tích và chuyên nghiệp nhưng vẫn thân thiện.
      - Sử dụng emoji để làm cuộc trò chuyện sinh động hơn giống như trong ảnh tham khảo (ví dụ: ✨, 🚀, 😊).
    `;

    const lastMessage = messages[messages.length - 1].content;

    const result = await model.generateContent([
      { text: systemPrompt },
      { text: `User asks: ${lastMessage}` },
    ]);

    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
