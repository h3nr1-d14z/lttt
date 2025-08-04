export interface Question {
  id: string;
  chapter: string;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  // Chương 1: Tổng quan và Các khái niệm cơ bản
  {
    id: "1-1",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Vai trò của môn khoa học Lý thuyết thông tin",
    answer: "Lý thuyết thông tin (LTTT) là một ngành khoa học toán học nền tảng, nghiên cứu về việc định lượng, lưu trữ và truyền thông tin. Nó cung cấp các nguyên tắc và giới hạn cơ bản cho các hệ thống xử lý thông tin, đóng vai trò là cơ sở lý thuyết cho nhiều lĩnh vực."
  },
  {
    id: "1-2",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Liệt kê một vài mốc lịch sử của môn khoa học Lý thuyết thông tin",
    answer: `• **1928:** Ralph Hartley giới thiệu bài báo "Transmission of Information".
• **1948:** Claude E. Shannon công bố bài báo "A Mathematical Theory of Communication", khai sinh ra Lý thuyết thông tin hiện đại.`
  },
  {
    id: "1-3",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Ai được coi là \"cha đẻ\" của môn khoa học Lý thuyết thông tin?",
    answer: "Claude E. Shannon."
  },
  {
    id: "1-4",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Mốc thời gian nào được coi là mốc thời gian ra đời của môn khoa học Lý thuyết thông tin?",
    answer: "Năm 1948."
  },
  {
    id: "1-5",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Ba khái niệm cơ bản của lý thuyết thông tin là gì?",
    answer: `1. Thông tin (Information)
2. Tin (Message)
3. Tín hiệu (Signal)`
  },
  {
    id: "1-6",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Nêu định nghĩa Thông tin, các đặc điểm của Thông tin? Lấy ví dụ?",
    answer: `• **Định nghĩa:** Thông tin là những tính chất xác định của vật chất mà con người thu nhận được nhằm mang lại sự hiểu biết, làm giảm độ bất định.
• **Đặc điểm:** Khách quan, Đa dạng.
• **Ví dụ:** "Nhiệt độ hôm nay là $35^\\circ C$".`
  },
  {
    id: "1-7",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Nêu định nghĩa Tin? các loại tin? Lấy ví dụ?",
    answer: `• **Định nghĩa:** Tin là dạng vật chất cụ thể dùng để biểu diễn thông tin.
• **Phân loại:** Tin liên tục (giọng nói) và Tin rời rạc (văn bản).`
  },
  {
    id: "1-8",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Nêu định nghĩa Tín hiệu? Các loại tín hiệu? Lấy ví dụ?",
    answer: `• **Định nghĩa:** Tín hiệu là các đại lượng vật lý biến thiên, dùng để mang tin.
• **Ví dụ:** Sóng điện từ, tín hiệu điện áp.`
  },
  {
    id: "1-9",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Sơ đồ tổng quát một hệ thống truyền tin đơn giản?",
    answer: "Nguồn tin → [Máy phát] → Kênh truyền → [Máy thu] → Nơi nhận tin"
  },
  {
    id: "1-10",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Các khối chính lớn của hệ thống",
    answer: `1. Máy phát (Transmitter)
2. Kênh truyền (Channel)
3. Máy thu (Receiver)`
  },
  {
    id: "1-11",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Vai trò của máy phát và các khối con",
    answer: `• **Vai trò:** Biến đổi tin thành tín hiệu phù hợp để truyền đi.
• **Các khối con:**
  1. **Mã hóa nguồn:** Nén dữ liệu, tăng **tính hiệu quả**.
  2. **Mã hóa kênh:** Thêm dư thừa chống lỗi, tăng **độ tin cậy**.
  3. **Điều chế:** Ghép tín hiệu lên sóng mang.`
  },
  {
    id: "1-12",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Vai trò của máy thu và các khối con",
    answer: `• **Vai trò:** Khôi phục lại tin gốc từ tín hiệu nhận được.
• **Các khối con:** Giải điều chế, Giải mã kênh, Giải mã nguồn.`
  },
  {
    id: "1-13",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Kênh là gì?",
    answer: "Kênh là môi trường vật lý mà tín hiệu được truyền từ máy phát đến máy thu."
  },
  {
    id: "1-14",
    chapter: "Chương 1: Tổng quan và Các khái niệm cơ bản",
    question: "Các tiêu chí tổng quát đánh giá chất lượng một hệ thống thông tin",
    answer: `1. Tính hiệu quả (Efficiency)
2. Độ tin cậy (Reliability)
3. An toàn (Security)
4. Chất lượng dịch vụ (Quality of Service - QoS)`
  },

  // Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh
  {
    id: "2-1",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Vai trò và mối quan hệ của độ bất định với lượng thông tin",
    answer: `• **Vai trò:** Độ bất định là tiền đề của thông tin.
• **Mối quan hệ:** Lượng thông tin **tỷ lệ thuận** với độ bất định.`
  },
  {
    id: "2-2",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Mối quan hệ giữa lượng tin và xác suất",
    answer: "Lượng thông tin **tỷ lệ nghịch** với xác suất xuất hiện của tin."
  },
  {
    id: "2-3",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Các tính chất của lượng tin",
    answer: `• $I(x) \\ge 0$.
• Nếu $p(x) = 1$ thì $I(x) = 0$.
• Nếu $x, y$ độc lập thì $I(x \\cap y) = I(x) + I(y)$.`
  },
  {
    id: "2-4",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Định nghĩa lượng thông tin riêng",
    answer: `$$
I(x) = -\\log_b(p(x))
$$`
  },
  {
    id: "2-5",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Các tên khác của lượng tin riêng",
    answer: "Lượng tin tiên nghiệm, độ bất ngờ (surprisal)."
  },
  {
    id: "2-6",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Các đơn vị phổ biến của lượng tin riêng",
    answer: `• Cơ số $b=2$: **bit**.
• Cơ số $b=e$: **nat**.
• Cơ số $b=10$: **hartley**.`
  },
  {
    id: "2-7",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Chuyển đổi đơn vị lượng tin",
    answer: `$$
I_a(x) = \\frac{I_b(x)}{\\log_a(b)}
$$`
  },
  {
    id: "2-9",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Lượng tin hậu nghiệm",
    answer: `• **Định nghĩa:** $I(x_k|y_l) = -\\log(p(x_k|y_l))$
• **Ý nghĩa:** Độ bất định còn lại của $x_k$ khi đã biết $y_l$.
• **Tên khác:** Lượng tin có điều kiện.
• **Giá trị cực đoan:** $0$ (kênh hoàn hảo) hoặc $I(x_k)$ (kênh bị đứt).`
  },
  {
    id: "2-10",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Lượng tin tương hỗ",
    answer: `• **Định nghĩa:** $I(x_k; y_l) = I(x_k) - I(x_k|y_l)$
• **Ý nghĩa:** Lượng thông tin chung giữa hai tin.
• **Tên khác:** Lượng tin chéo.
• **Giá trị cực đoan:** $I(x_k)$ (kênh hoàn hảo) hoặc $0$ (kênh bị đứt).`
  },
  {
    id: "2-11",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Mối quan hệ giữa các lượng tin",
    answer: `$$
I(x_k) = I(x_k; y_l) + I(x_k|y_l)
$$`
  },
  {
    id: "2-12",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Entropy của nguồn rời rạc không nhớ (DMS)",
    answer: `• **Định nghĩa:** Lượng tin riêng trung bình của nguồn.
$$
H(X) = E[I(x)] = -\\sum_{k=1}^{N} p(x_k)\\log(p(x_k))
$$
• **Ý nghĩa:** Độ bất định trung bình của nguồn.
• **Tên khác:** Entropy một chiều.`
  },
  {
    id: "2-13",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Entropy hợp",
    answer: `• **Định nghĩa:** $H(X, Y) = -\\sum_{k}\\sum_{l} p(x_k, y_l)\\log(p(x_k, y_l))$
• **Ý nghĩa:** Độ bất định trung bình của cặp nguồn $(X,Y)$.
• **Tên khác:** Entropy đồng thời.`
  },
  {
    id: "2-14",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Entropy có điều kiện từng phần",
    answer: `• **Định nghĩa:** $H(X|Y=y_l) = -\\sum_{k} p(x_k|y_l)\\log(p(x_k|y_l))$
• **Ý nghĩa:** Độ bất định trung bình của $X$ khi biết chính xác $y_l$.`
  },
  {
    id: "2-15",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Entropy có điều kiện",
    answer: `• **Định nghĩa:** $H(X|Y) = -\\sum_{k}\\sum_{l} p(x_k, y_l)\\log(p(x_k|y_l))$
• **Ý nghĩa:** Độ bất định trung bình còn lại của $X$ khi đã biết $Y$.`
  },
  {
    id: "2-16",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Entropy tương đối (Khoảng cách Kullback-Leibler)",
    answer: `• **Định nghĩa:** $D(p||q) = \\sum_{x \\in X} p(x)\\log\\frac{p(x)}{q(x)}$
• **Ý nghĩa:** Đo sự khác biệt thông tin giữa hai phân bố.`
  },
  {
    id: "2-17",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Lượng tin tương hỗ (giữa các nguồn)",
    answer: `• **Định nghĩa:** $I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)$
• **Ý nghĩa:** Lượng tin trung bình được truyền thành công qua kênh.`
  },
  {
    id: "2-18",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Entropy chéo (cross-entropy)",
    answer: `• **Định nghĩa:** $H(p, q) = -\\sum_{x \\in X} p(x)\\log(q(x))$
• **Ý nghĩa:** Trong học máy, đo lường hiệu suất của mô hình phân loại.`
  },
  {
    id: "2-19",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Lượng tin thu được (Information gain - IG) trong cây quyết định",
    answer: `• **Định nghĩa:** $IG(S, A) = H(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|}H(S_v)$
• **Nguyên tắc:** Chọn thuộc tính có $IG$ lớn nhất để phân chia.`
  },
  {
    id: "2-20",
    chapter: "Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh",
    question: "Các tính chất và mối quan hệ của Entropy",
    answer: `• $H(X) \\ge 0$, $I(X;Y) \\ge 0$.
• **Chain Rule:** $H(X,Y) = H(X) + H(Y|X)$.
• **Điều kiện:** $H(X|Y) \\le H(X)$.
• **Cơ bản:** $I(X;Y) = H(X) + H(Y) - H(X,Y)$.`
  },

  // Chương 4: Mã hóa nguồn
  {
    id: "4-1",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Mục tiêu, nguyên tắc, phân loại mã hóa nguồn",
    answer: `• **Mục tiêu:** Biểu diễn dữ liệu nhỏ gọn.
• **Nguyên tắc:** Loại bỏ dư thừa.
• **Phân loại:** Nén không tổn hao (Lossless) và Nén có tổn hao (Lossy).`
  },
  {
    id: "4-2",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Định nghĩa mã hóa, từ mã, độ dài từ mã, bộ mã",
    answer: `• **Mã hóa:** Ánh xạ từ tin nguồn sang từ mã.
• **Từ mã:** Chuỗi ký hiệu mã.
• **Độ dài từ mã:** Số ký hiệu trong từ mã.
• **Bộ mã:** Tập hợp các từ mã.`
  },
  {
    id: "4-3",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Các thông số cơ bản của bộ mã",
    answer: `• **Độ dài trung bình:** $\\bar{L} = \\sum_{k=1}^{N} p(x_k) l_k$
• **Hiệu suất:** $\\eta = \\frac{H(X)}{\\bar{L}}$
• **Phương sai độ dài:** $\\sigma_L^2 = \\sum_{k=1}^{N} p(x_k) (l_k - \\bar{L})^2$`
  },
  {
    id: "4-4",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Định nghĩa các bộ mã và mối quan hệ",
    answer: `• **Mã không suy biến:** Ánh xạ 1-1.
• **Mã có khả năng giải mã duy nhất (UD):** Chuỗi mã chỉ giải được theo một cách.
• **Bộ mã có tính prefix:** Không từ mã nào là phần đầu của từ mã khác.
• **Biểu đồ Venn:** Prefix ⊂ UD ⊂ Non-singular.`
  },
  {
    id: "4-5",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Bất đẳng thức Kraft",
    answer: `Một bộ mã prefix với cơ số $q$ và độ dài $l_k$ tồn tại khi và chỉ khi:
$$
\\sum_{k=1}^{N} q^{-l_k} \\le 1
$$`
  },
  {
    id: "4-6",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Nguyên tắc và bài toán mã hóa thống kê tối ưu",
    answer: `• **Nguyên tắc:** Gán mã ngắn cho tin xác suất cao.
• **Bài toán:** Tìm bộ mã prefix có $\\bar{L}$ nhỏ nhất.`
  },
  {
    id: "4-7",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Định lý mã hóa thứ nhất của Shannon",
    answer: `$$
\\bar{L} \\ge H(X)
$$`
  },
  {
    id: "4-8",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Định lý bất đẳng thức kẹp",
    answer: `$$
H(X) \\le \\bar{L}^* < H(X) + 1
$$`
  },
  {
    id: "4-9",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Mã hóa khối và bất đẳng thức kẹp",
    answer: `• **Mã hóa khối:** Mã hóa một chuỗi $n$ ký hiệu.
• **Bất đẳng thức:** $\\bar{L}_n$ là độ dài trung bình trên mỗi ký hiệu.
$$
H(X) \\le \\bar{L}_n < H(X) + \\frac{1}{n}
$$`
  },
  {
    id: "4-10",
    chapter: "Chương 4: Mã hóa nguồn",
    question: "Giá phải trả khi mã hóa thống kê xấp xỉ",
    answer: `Sử dụng phân bố $q(x)$ thay vì $p(x)$ sẽ làm tăng độ dài trung bình một lượng $D(p||q)$.
$$
\\bar{L}_{thuc\\_te} = H(p) + D(p||q)
$$`
  },

  // Chương 5: Mã hóa kênh
  {
    id: "5-1",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Mô tả quá trình mã hóa khối",
    answer: "Một khối $k$ bit thông tin được ánh xạ thành một khối $l$ bit từ mã ($l > k$)."
  },
  {
    id: "5-2",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Bản tin và từ mã",
    answer: `• Cụm $k$ bit vào: **bản tin**.
• Cụm $l$ bit ra: **từ mã**.`
  },
  {
    id: "5-3",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Định nghĩa véc-tơ mã",
    answer: "Là biểu diễn dạng véc-tơ của từ mã, ví dụ $c = (c_1, c_2, ..., c_l)$."
  },
  {
    id: "5-4",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Số từ mã của bộ mã khối",
    answer: "$M = 2^k$."
  },
  {
    id: "5-5",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Độ dư thừa và Tỷ số mã hóa",
    answer: `• **Độ dư thừa:** $r = l - k$.
• **Tỷ số mã hóa:** $R = k / l$.`
  },
  {
    id: "5-6",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Trọng số của một từ mã",
    answer: "Trọng số Hamming $w(c)$ là số bit `1` trong từ mã $c$."
  },
  {
    id: "5-7",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Khoảng cách mã Hamming",
    answer: "Khoảng cách Hamming $d(c_1, c_2)$ là số vị trí bit mà $c_1$ và $c_2$ khác nhau."
  },
  {
    id: "5-8",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Khoảng cách mã Hamming tối thiểu ($d_{min}$)",
    answer: "Là khoảng cách Hamming nhỏ nhất giữa hai từ mã bất kỳ khác nhau trong bộ mã."
  },
  {
    id: "5-9",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Định lý về khả năng phát hiện và sửa lỗi",
    answer: `Một bộ mã có $d_{min}$ có thể:
• Phát hiện $t$ lỗi nếu: $d_{min} \\ge t + 1$
• Sửa $t$ lỗi nếu: $d_{min} \\ge 2t + 1$`
  },
  {
    id: "5-10",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Biểu thức truyền mã và véc-tơ lỗi",
    answer: `• **Biểu thức:** $r = c \\oplus e$ (cộng modulo 2)
• **Véc-tơ lỗi $e$:** Có bit \`1\` tại vị trí lỗi.`
  },
  {
    id: "5-11",
    chapter: "Chương 5: Mã hóa kênh",
    question: "Các thao tác khi phát hiện lỗi",
    answer: `• **ARQ:** Yêu cầu phát lại.
• **FEC:** Tự động sửa lỗi.`
  },

  // Mã khối tuyến tính & Mã vòng
  {
    id: "6-1",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Định nghĩa mã khối tuyến tính (LBC)",
    answer: "Là một bộ mã khối mà tập hợp các từ mã của nó tạo thành một không gian con tuyến tính."
  },
  {
    id: "6-2",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Chiều của không gian véc-tơ",
    answer: "Chiều là $k$."
  },
  {
    id: "6-3",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Ký hiệu của LBC",
    answer: "$C(l, k)$ hoặc $C(l, k, d_{min})$."
  },
  {
    id: "6-4",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Đặc điểm của LBC",
    answer: `• Luôn chứa từ mã toàn \`0\`.
• $d_{min} = w_{min}$ (trọng số nhỏ nhất của các từ mã khác không).`
  },
  {
    id: "6-5",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Ma trận sinh G",
    answer: `• **Thành lập:** Các hàng là một cơ sở của không gian mã.
• **Kích thước:** $k \\times l$.
• **Mã hóa:** $c = uG$.`
  },
  {
    id: "6-6",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Liệt kê từ mã từ G",
    answer: "Cho $u$ nhận $2^k$ giá trị và tính $c = uG$."
  },
  {
    id: "6-7",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Ma trận kiểm tra H",
    answer: `• **Thành lập:** Các hàng là một cơ sở của không gian đối ngẫu.
• **Kích thước:** $(l-k) \\times l$.`
  },
  {
    id: "6-8",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Biểu thức kiểm tra",
    answer: "$c$ là từ mã hợp lệ $\\iff cH^T = 0$."
  },
  {
    id: "6-9",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Cách xác định $d_{min}$ cho LBC",
    answer: "Tìm $w_{min}$ hoặc tìm số cột nhỏ nhất của $H$ mà phụ thuộc tuyến tính."
  },
  {
    id: "6-10",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Mối quan hệ giữa G và H",
    answer: `$$
GH^T = 0
$$`
  },
  {
    id: "6-11",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Mã khối tuyến tính hệ thống",
    answer: "Là LBC mà từ mã chứa bản tin gốc nguyên vẹn."
  },
  {
    id: "6-12",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Dạng ma trận G, H hệ thống",
    answer: `Nếu $c = [a | p]$ (bản tin | kiểm tra), thì:
$$
G = [I_k | P] \\quad \\text{và} \\quad H = [P^T | I_{l-k}]
$$`
  },
  {
    id: "6-13",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Chuyển ma trận về dạng hệ thống",
    answer: "Dùng phép khử Gauss-Jordan."
  },
  {
    id: "6-14",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Tại sao mã hệ thống được quan tâm?",
    answer: "Mã hóa và trích xuất bản tin (khi không lỗi) rất đơn giản."
  },
  {
    id: "6-15",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Mã khối tuyến tính tối ưu",
    answer: "Là mã có $d_{min}$ lớn nhất với $l, k$ cho trước."
  },
  {
    id: "6-16",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Các giới hạn mã hóa",
    answer: `• **Giới hạn Hamming:** $\\sum_{i=0}^{t} \\binom{l}{i} \\le 2^{l-k}$
• **Giới hạn Griesmer:** $l \\ge \\sum_{i=0}^{k-1} \\left\\lceil \\frac{d_{min}}{2^i} \\right\\rceil$
• **Giới hạn Plotkin:** $d_{min} \\le \\frac{l \\cdot 2^{k-1}}{2^k - 1}$`
  },
  {
    id: "6-17",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Phép ánh xạ sang đa thức mã",
    answer: "$c = (c_0, ..., c_{l-1}) \\leftrightarrow c(x) = c_0 + c_1x + ... + c_{l-1}x^{l-1}$."
  },
  {
    id: "6-18",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Các phép toán đa thức",
    answer: "Thực hiện trong vành $F_2[x]/(x^l-1)$."
  },
  {
    id: "6-19",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Mã vòng tuyến tính",
    answer: "Là LBC mà dịch vòng của một từ mã cũng là một từ mã."
  },
  {
    id: "6-20",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Đa thức sinh g(x)",
    answer: `• Là đa thức monic bậc nhỏ nhất trong mã.
• Là một ước của $x^l - 1$.
• Mọi đa thức mã đều là bội của $g(x)$.`
  },
  {
    id: "6-21",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Liệt kê từ mã từ g(x)",
    answer: "Tính $c(x) = a(x)g(x)$ cho mọi đa thức bản tin $a(x)$ bậc $< k$."
  },
  {
    id: "6-22",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Đa thức kiểm tra h(x)",
    answer: "$g(x)h(x) = x^l - 1$."
  },
  {
    id: "6-23",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Xây dựng ma trận sinh G từ g(x)",
    answer: `$$
G = \\begin{pmatrix}
g(x) \\\\
x \\cdot g(x) \\\\
\\vdots \\\\
x^{k-1} \\cdot g(x)
\\end{pmatrix}
$$`
  },
  {
    id: "6-24",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Xây dựng ma trận kiểm tra H từ h(x)",
    answer: "Tương tự G nhưng dùng đa thức đối ngẫu của $h(x)$."
  },
  {
    id: "6-25",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Thuật toán lập mã hệ thống (thuật toán chia)",
    answer: `1. Tính $x^{l-k}a(x)$.
2. Tìm phần dư $p(x) = (x^{l-k}a(x)) \\pmod{g(x)}$.
3. Từ mã là $c(x) = x^{l-k}a(x) + p(x)$.`
  },
  {
    id: "6-26",
    chapter: "Mã khối tuyến tính & Mã vòng",
    question: "Thuật toán lập mã hệ thống (thuật toán nhân)",
    answer: "Dựa trên ma trận kiểm tra $H$ dạng hệ thống để tính các bit kiểm tra từ các bit bản tin."
  }
];