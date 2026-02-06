import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const createModel = () => {
  // Prefer API_KEY to align with Vercel env variable setup; fall back to GEMINI_API_KEY for compatibility
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Thiếu biến môi trường API_KEY (hoặc GEMINI_API_KEY).");
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
      Trường là một Frontend Developer với hơn 1 năm kinh nghiệm. 
      Bạn hãy trả lời các câu hỏi của người dùng về Trường dựa trên các thông tin sau:
      - Tên: Nguyễn Văn Trường.
      - Vai trò: Frontend Developer.
      - Kinh nghiệm: 1 năm (từ 9/2024 - 2/2026 tại Hacom).
      - Kỹ năng: HTML, CSS, TypeScript, React.js, Next.js, TailwindCSS, Bootstrap, Sass, Git, Figma, Canva.
      - Dự án đã làm: Pos Hacom , Dịch Vụ Tốt , Web Admin ,Shipping App. Các dự án này thường sử dụng React.js, Next.js, Tailwind CSS và tích hợp API.
      - Mục tiêu: Tìm kiếm cơ hội Fresher hoặc Junior Developer.
      - Tính cách: Nhiệt huyết, đam mê tạo ra trải nghiệm người dùng tuyệt vời.
      - Địa chỉ liên hệ: Chương Mỹ, Hà Nội. Email: truongha21062004@gmail.com , SĐT: 0364275585.
      - GPA : 9.0/10.0 tại FPT Polytechnic .tốt nghiệp năm 2024 với bằng Xuất sắc.
      -Chứng chỉ: Có 3 chứng chỉ do nhà trường cấp Xây dựng và triển khai website bán hàng với Reactjs và TypeScript, Xây dựng website giao diện bán hàng NNShop, Xây dựng dịch vụ chuyên nghiệp với Node.js, có thể xem chi tiết ở giới thiệu khi click vào tên chứng chỉ.
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
