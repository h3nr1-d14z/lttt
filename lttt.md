### **Chuẩn định dạng mới:**

1.  **Công thức trên cùng một dòng (inline):** Sẽ được đặt trong cặp dấu đô-la đơn (`$...$`).
    *   Ví dụ: `Độ dài trung bình là $\bar{L}$` sẽ hiển thị là: Độ dài trung bình là $\bar{L}$.

2.  **Công thức riêng một khối (block):** Sẽ được đặt trong cặp dấu đô-la kép (`$$...$$`).
    *   Ví dụ: `$$ H(X) = -\sum p(x)\log(p(x)) $$` sẽ hiển thị công thức trên một dòng riêng và được canh giữa.

### **Hướng dẫn sử dụng:**

*   **Đối với các file `.md` (dùng trong Obsidian, Typora, VS Code với plugin...):** Bạn chỉ cần sao chép toàn bộ nội dung bên dưới, các công thức sẽ tự động hiển thị chính xác.
*   **LƯU Ý QUAN TRỌNG CHO NOTION:** Khi sao chép vào Notion, bạn hãy tạo một khối `/math equation` và chỉ sao chép **phần nội dung bên trong** các dấu `$` hoặc `$$`, không bao gồm chính các dấu đó.

Dưới đây là toàn bộ nội dung đã được định dạng lại theo chuẩn này.

***

### **Chương 1: Tổng quan và Các khái niệm cơ bản**

**1) Vai trò của môn khoa học Lý thuyết thông tin**
Lý thuyết thông tin (LTTT) là một ngành khoa học toán học nền tảng, nghiên cứu về việc định lượng, lưu trữ và truyền thông tin. Nó cung cấp các nguyên tắc và giới hạn cơ bản cho các hệ thống xử lý thông tin, đóng vai trò là cơ sở lý thuyết cho nhiều lĩnh vực.

**2) Liệt kê một vài mốc lịch sử của môn khoa học Lý thuyết thông tin**
*   **1928:** Ralph Hartley giới thiệu bài báo "Transmission of Information".
*   **1948:** Claude E. Shannon công bố bài báo "A Mathematical Theory of Communication", khai sinh ra Lý thuyết thông tin hiện đại.

**3) Ai được coi là "cha đẻ" của môn khoa học Lý thuyết thông tin?**
*   Claude E. Shannon.

**4) Mốc thời gian nào được coi là mốc thời gian ra đời của môn khoa học Lý thuyết thông tin?**
*   Năm 1948.

**5) Ba khái niệm cơ bản của lý thuyết thông tin là gì?**
1.  Thông tin (Information)
2.  Tin (Message)
3.  Tín hiệu (Signal)

**6) Nêu định nghĩa Thông tin, các đặc điểm của Thông tin? Lấy ví dụ?**
*   **Định nghĩa:** Thông tin là những tính chất xác định của vật chất mà con người thu nhận được nhằm mang lại sự hiểu biết, làm giảm độ bất định.
*   **Đặc điểm:** Khách quan, Đa dạng.
*   **Ví dụ:** "Nhiệt độ hôm nay là $35^\circ C$".

**7) Nêu định nghĩa Tin? các loại tin? Lấy ví dụ?**
*   **Định nghĩa:** Tin là dạng vật chất cụ thể dùng để biểu diễn thông tin.
*   **Phân loại:** Tin liên tục (giọng nói) và Tin rời rạc (văn bản).

**8) Nêu định nghĩa Tín hiệu? Các loại tín hiệu? Lấy ví dụ?**
*   **Định nghĩa:** Tín hiệu là các đại lượng vật lý biến thiên, dùng để mang tin.
*   **Ví dụ:** Sóng điện từ, tín hiệu điện áp.

**9) Sơ đồ tổng quát một hệ thống truyền tin đơn giản?**
Nguồn tin → [Máy phát] → Kênh truyền → [Máy thu] → Nơi nhận tin

**10) Các khối chính lớn của hệ thống**
1.  Máy phát (Transmitter)
2.  Kênh truyền (Channel)
3.  Máy thu (Receiver)

**11) Vai trò của máy phát và các khối con**
*   **Vai trò:** Biến đổi tin thành tín hiệu phù hợp để truyền đi.
*   **Các khối con:**
    1.  **Mã hóa nguồn:** Nén dữ liệu, tăng **tính hiệu quả**.
    2.  **Mã hóa kênh:** Thêm dư thừa chống lỗi, tăng **độ tin cậy**.
    3.  **Điều chế:** Ghép tín hiệu lên sóng mang.

**12) Vai trò của máy thu và các khối con**
*   **Vai trò:** Khôi phục lại tin gốc từ tín hiệu nhận được.
*   **Các khối con:** Giải điều chế, Giải mã kênh, Giải mã nguồn.

**13) Kênh là gì?**
*   Kênh là môi trường vật lý mà tín hiệu được truyền từ máy phát đến máy thu.

**14) Các tiêu chí tổng quát đánh giá chất lượng một hệ thống thông tin**
1.  Tính hiệu quả (Efficiency)
2.  Độ tin cậy (Reliability)
3.  An toàn (Security)
4.  Chất lượng dịch vụ (Quality of Service - QoS)

***

### **Chương 2 & 3: Lý thuyết thông tin thống kê & Dung lượng kênh**

**1) Vai trò và mối quan hệ của độ bất định với lượng thông tin**
*   **Vai trò:** Độ bất định là tiền đề của thông tin.
*   **Mối quan hệ:** Lượng thông tin **tỷ lệ thuận** với độ bất định.

**2) Mối quan hệ giữa lượng tin và xác suất**
*   Lượng thông tin **tỷ lệ nghịch** với xác suất xuất hiện của tin.

**3) Các tính chất của lượng tin**
*   $I(x) \ge 0$.
*   Nếu $p(x) = 1$ thì $I(x) = 0$.
*   Nếu $x, y$ độc lập thì $I(x \cap y) = I(x) + I(y)$.

**4) Định nghĩa lượng thông tin riêng**
$$
I(x) = -\log_b(p(x))
$$

**5) Các tên khác của lượng tin riêng**
*   Lượng tin tiên nghiệm, độ bất ngờ (surprisal).

**6) Các đơn vị phổ biến của lượng tin riêng**
*   Cơ số $b=2$: **bit**.
*   Cơ số $b=e$: **nat**.
*   Cơ số $b=10$: **hartley**.

**7) & 8) Chuyển đổi đơn vị lượng tin**
$$
I_a(x) = \frac{I_b(x)}{\log_a(b)}
$$

**9) Lượng tin hậu nghiệm**
*   **Định nghĩa:** $I(x_k|y_l) = -\log(p(x_k|y_l))$
*   **Ý nghĩa:** Độ bất định còn lại của $x_k$ khi đã biết $y_l$.
*   **Tên khác:** Lượng tin có điều kiện.
*   **Giá trị cực đoan:** $0$ (kênh hoàn hảo) hoặc $I(x_k)$ (kênh bị đứt).

**10) Lượng tin tương hỗ**
*   **Định nghĩa:** $I(x_k; y_l) = I(x_k) - I(x_k|y_l)$
*   **Ý nghĩa:** Lượng thông tin chung giữa hai tin.
*   **Tên khác:** Lượng tin chéo.
*   **Giá trị cực đoan:** $I(x_k)$ (kênh hoàn hảo) hoặc $0$ (kênh bị đứt).

**11) Mối quan hệ giữa các lượng tin**
$$
I(x_k) = I(x_k; y_l) + I(x_k|y_l)
$$

**12) Entropy của nguồn rời rạc không nhớ (DMS)**
*   **Định nghĩa:** Lượng tin riêng trung bình của nguồn.
    $$
    H(X) = E[I(x)] = -\sum_{k=1}^{N} p(x_k)\log(p(x_k))
    $$
*   **Ý nghĩa:** Độ bất định trung bình của nguồn.
*   **Tên khác:** Entropy một chiều.

**13) Entropy hợp**
*   **Định nghĩa:** $H(X, Y) = -\sum_{k}\sum_{l} p(x_k, y_l)\log(p(x_k, y_l))$
*   **Ý nghĩa:** Độ bất định trung bình của cặp nguồn $(X,Y)$.
*   **Tên khác:** Entropy đồng thời.

**14) Entropy có điều kiện từng phần**
*   **Định nghĩa:** $H(X|Y=y_l) = -\sum_{k} p(x_k|y_l)\log(p(x_k|y_l))$
*   **Ý nghĩa:** Độ bất định trung bình của $X$ khi biết chính xác $y_l$.

**15) Entropy có điều kiện**
*   **Định nghĩa:** $H(X|Y) = -\sum_{k}\sum_{l} p(x_k, y_l)\log(p(x_k|y_l))$
*   **Ý nghĩa:** Độ bất định trung bình còn lại của $X$ khi đã biết $Y$.

**16) Entropy tương đối (Khoảng cách Kullback-Leibler)**
*   **Định nghĩa:** $D(p||q) = \sum_{x \in X} p(x)\log\frac{p(x)}{q(x)}$
*   **Ý nghĩa:** Đo sự khác biệt thông tin giữa hai phân bố.

**17) Lượng tin tương hỗ (giữa các nguồn)**
*   **Định nghĩa:** $I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)$
*   **Ý nghĩa:** Lượng tin trung bình được truyền thành công qua kênh.

**18) Entropy chéo (cross-entropy)**
*   **Định nghĩa:** $H(p, q) = -\sum_{x \in X} p(x)\log(q(x))$
*   **Ý nghĩa:** Trong học máy, đo lường hiệu suất của mô hình phân loại.

**19) Lượng tin thu được (Information gain - IG) trong cây quyết định**
*   **Định nghĩa:** $IG(S, A) = H(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|}H(S_v)$
*   **Nguyên tắc:** Chọn thuộc tính có $IG$ lớn nhất để phân chia.

**20) Các tính chất và mối quan hệ của Entropy**
*   $H(X) \ge 0$, $I(X;Y) \ge 0$.
*   **Chain Rule:** $H(X,Y) = H(X) + H(Y|X)$.
*   **Điều kiện:** $H(X|Y) \le H(X)$.
*   **Cơ bản:** $I(X;Y) = H(X) + H(Y) - H(X,Y)$.

---

### **Chương 4: Mã hóa nguồn**

**1) Mục tiêu, nguyên tắc, phân loại mã hóa nguồn**
*   **Mục tiêu:** Biểu diễn dữ liệu nhỏ gọn.
*   **Nguyên tắc:** Loại bỏ dư thừa.
*   **Phân loại:** Nén không tổn hao (Lossless) và Nén có tổn hao (Lossy).

**2) Định nghĩa mã hóa, từ mã, độ dài từ mã, bộ mã**
*   **Mã hóa:** Ánh xạ từ tin nguồn sang từ mã.
*   **Từ mã:** Chuỗi ký hiệu mã.
*   **Độ dài từ mã:** Số ký hiệu trong từ mã.
*   **Bộ mã:** Tập hợp các từ mã.

**3) Các thông số cơ bản của bộ mã**
*   **Độ dài trung bình:** $\bar{L} = \sum_{k=1}^{N} p(x_k) l_k$
*   **Hiệu suất:** $\eta = \frac{H(X)}{\bar{L}}$
*   **Phương sai độ dài:** $\sigma_L^2 = \sum_{k=1}^{N} p(x_k) (l_k - \bar{L})^2$

**4) Định nghĩa các bộ mã và mối quan hệ**
*   **Mã không suy biến:** Ánh xạ 1-1.
*   **Mã có khả năng giải mã duy nhất (UD):** Chuỗi mã chỉ giải được theo một cách.
*   **Bộ mã có tính prefix:** Không từ mã nào là phần đầu của từ mã khác.
*   **Biểu đồ Venn:** `Prefix ⊂ UD ⊂ Non-singular`.

**5) Bất đẳng thức Kraft**
Một bộ mã prefix với cơ số $q$ và độ dài $l_k$ tồn tại khi và chỉ khi:
$$
\sum_{k=1}^{N} q^{-l_k} \le 1
$$

**6) Nguyên tắc và bài toán mã hóa thống kê tối ưu**
*   **Nguyên tắc:** Gán mã ngắn cho tin xác suất cao.
*   **Bài toán:** Tìm bộ mã prefix có $\bar{L}$ nhỏ nhất.

**7) Định lý mã hóa thứ nhất của Shannon**
$$
\bar{L} \ge H(X)
$$

**8) Định lý bất đẳng thức kẹp**
$$
H(X) \le \bar{L}^* < H(X) + 1
$$

**9) Mã hóa khối và bất đẳng thức kẹp**
*   **Mã hóa khối:** Mã hóa một chuỗi $n$ ký hiệu.
*   **Bất đẳng thức:** $\bar{L}_n$ là độ dài trung bình trên mỗi ký hiệu.
    $$
    H(X) \le \bar{L}_n < H(X) + \frac{1}{n}
    $$

**10) Giá phải trả khi mã hóa thống kê xấp xỉ**
Sử dụng phân bố $q(x)$ thay vì $p(x)$ sẽ làm tăng độ dài trung bình một lượng $D(p||q)$.
$$
\bar{L}_{thuc\_te} = H(p) + D(p||q)
$$

---

### **Chương 5: Mã hóa kênh**

**1) Mô tả quá trình mã hóa khối**
Một khối $k$ bit thông tin được ánh xạ thành một khối $l$ bit từ mã ($l > k$).

**2) Bản tin và từ mã**
*   Cụm $k$ bit vào: **bản tin**.
*   Cụm $l$ bit ra: **từ mã**.

**3) Định nghĩa véc-tơ mã**
*   Là biểu diễn dạng véc-tơ của từ mã, ví dụ $c = (c_1, c_2, ..., c_l)$.

**4) Số từ mã của bộ mã khối**
*   $M = 2^k$.

**5) Độ dư thừa và Tỷ số mã hóa**
*   **Độ dư thừa:** $r = l - k$.
*   **Tỷ số mã hóa:** $R = k / l$.

**6) Trọng số của một từ mã**
*   Trọng số Hamming $w(c)$ là số bit `1` trong từ mã $c$.

**7) Khoảng cách mã Hamming**
*   Khoảng cách Hamming $d(c_1, c_2)$ là số vị trí bit mà $c_1$ và $c_2$ khác nhau.

**8) Khoảng cách mã Hamming tối thiểu ($d_{min}$)**
*   Là khoảng cách Hamming nhỏ nhất giữa hai từ mã bất kỳ khác nhau trong bộ mã.

**9) Định lý về khả năng phát hiện và sửa lỗi**
Một bộ mã có $d_{min}$ có thể:
*   Phát hiện $t$ lỗi nếu: $d_{min} \ge t + 1$
*   Sửa $t$ lỗi nếu: $d_{min} \ge 2t + 1$

**10) Biểu thức truyền mã và véc-tơ lỗi**
*   **Biểu thức:** $r = c \oplus e$ (cộng modulo 2)
*   **Véc-tơ lỗi $e$:** Có bit `1` tại vị trí lỗi.

**11) Các thao tác khi phát hiện lỗi**
*   **ARQ:** Yêu cầu phát lại.
*   **FEC:** Tự động sửa lỗi.

---
### **Mã khối tuyến tính & Mã vòng**

**1) Định nghĩa mã khối tuyến tính (LBC)**
Là một bộ mã khối mà tập hợp các từ mã của nó tạo thành một không gian con tuyến tính.

**2) Chiều của không gian véc-tơ**
*   Chiều là $k$.

**3) Ký hiệu của LBC**
*   $C(l, k)$ hoặc $C(l, k, d_{min})$.

**4) Đặc điểm của LBC**
*   Luôn chứa từ mã toàn `0`.
*   $d_{min} = w_{min}$ (trọng số nhỏ nhất của các từ mã khác không).

**5) Ma trận sinh G**
*   **Thành lập:** Các hàng là một cơ sở của không gian mã.
*   **Kích thước:** $k \times l$.
*   **Mã hóa:** $c = uG$.

**6) Liệt kê từ mã từ G**
*   Cho $u$ nhận $2^k$ giá trị và tính $c = uG$.

**7) Ma trận kiểm tra H**
*   **Thành lập:** Các hàng là một cơ sở của không gian đối ngẫu.
*   **Kích thước:** $(l-k) \times l$.

**8) Biểu thức kiểm tra**
*   $c$ là từ mã hợp lệ $\iff cH^T = 0$.

**9) Cách xác định $d_{min}$ cho LBC**
*   Tìm $w_{min}$ hoặc tìm số cột nhỏ nhất của $H$ mà phụ thuộc tuyến tính.

**10) Mối quan hệ giữa G và H**
$$
GH^T = 0
$$

**11) Mã khối tuyến tính hệ thống**
*   Là LBC mà từ mã chứa bản tin gốc nguyên vẹn.

**12) Dạng ma trận G, H hệ thống**
*   Nếu $c = [a | p]$ (bản tin | kiểm tra), thì:
    $$
    G = [I_k | P] \quad \text{và} \quad H = [P^T | I_{l-k}]
    $$

**13) Chuyển ma trận về dạng hệ thống**
*   Dùng phép khử Gauss-Jordan.

**14) Tại sao mã hệ thống được quan tâm?**
*   Mã hóa và trích xuất bản tin (khi không lỗi) rất đơn giản.

**15) Mã khối tuyến tính tối ưu**
*   Là mã có $d_{min}$ lớn nhất với $l, k$ cho trước.

**16) Các giới hạn mã hóa**
*   **Giới hạn Hamming:** $\sum_{i=0}^{t} \binom{l}{i} \le 2^{l-k}$
*   **Giới hạn Griesmer:** $l \ge \sum_{i=0}^{k-1} \left\lceil \frac{d_{min}}{2^i} \right\rceil$
*   **Giới hạn Plotkin:** $d_{min} \le \frac{l \cdot 2^{k-1}}{2^k - 1}$

**17) Phép ánh xạ sang đa thức mã**
*   $c = (c_0, ..., c_{l-1}) \leftrightarrow c(x) = c_0 + c_1x + ... + c_{l-1}x^{l-1}$.

**18) Các phép toán đa thức**
*   Thực hiện trong vành $F_2[x]/(x^l-1)$.

**19) Mã vòng tuyến tính**
*   Là LBC mà dịch vòng của một từ mã cũng là một từ mã.

**20) Đa thức sinh g(x)**
*   Là đa thức monic bậc nhỏ nhất trong mã.
*   Là một ước của $x^l - 1$.
*   Mọi đa thức mã đều là bội của $g(x)$.

**21) Liệt kê từ mã từ g(x)**
*   Tính $c(x) = a(x)g(x)$ cho mọi đa thức bản tin $a(x)$ bậc $< k$.

**22) Đa thức kiểm tra h(x)**
*   $g(x)h(x) = x^l - 1$.

**23) Xây dựng ma trận sinh G từ g(x)**
$$
G = \begin{pmatrix}
g(x) \\
x \cdot g(x) \\
\vdots \\
x^{k-1} \cdot g(x)
\end{pmatrix}
$$

**24) Xây dựng ma trận kiểm tra H từ h(x)**
*   Tương tự G nhưng dùng đa thức đối ngẫu của $h(x)$.

**25) Thuật toán lập mã hệ thống (thuật toán chia)**
1.  Tính $x^{l-k}a(x)$.
2.  Tìm phần dư $p(x) = (x^{l-k}a(x)) \pmod{g(x)}$.
3.  Từ mã là $c(x) = x^{l-k}a(x) + p(x)$.

**26) Thuật toán lập mã hệ thống (thuật toán nhân)**
*   Dựa trên ma trận kiểm tra $H$ dạng hệ thống để tính các bit kiểm tra từ các bit bản tin.