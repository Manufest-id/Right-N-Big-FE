import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Lightbulb,
  MessageSquare,
  CheckCircle,
  Target,
  Briefcase,
  MapPin,
  Award,
  Shield,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";

const PersonalMapping = () => {
  const tests = [
    {
      id: "cq",
      number: "01",
      title: "Character Quotient (CQ)",
      description: `Tes atau konsep yang digunakan untuk mengukur karakter atau kualitas kepribadian seseorang, terutama yang berkaitan dengan nilai-nilai moral, etika, dan integritas. Tes ini berbeda dari IQ (Intelligence Quotient) dan EQ (Emotional Quotient), karena CQ lebih menekankan pada siapa seseorang itu secara moral dan etis, bukan seberapa pintar atau emosionalnya. Tes CQ bertujuan mengukur kedewasaan karakter seseorang, bukan hanya kemampuan berpikir atau emosi. Tes ini sangat relevan di dunia pendidikan, kepemimpinan, dan pengembangan sumber daya manusia karena karakter adalah fondasi dari perilaku yang baik dan berkelanjutan.`,
      aspects: [
        { name: "Personality" },
        { name: "Karakter" },
        { name: "Temperamen" },
        { name: "Menentukan Warna Dominan Kamu" },
        {
          name: "Menentukan Gerbang Kepercayaan Kamu (Visual, Audio, Kinestetik)",
        },
      ],
      icon: <CheckCircle size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "rba",
      number: "02",
      title: "Root Belief Assessment (RBA)",
      description: `Jenis tes atau asesmen psikologis yang bertujuan untuk mengidentifikasi keyakinan inti (root beliefs) yang dimiliki seseorang—yaitu keyakinan mendalam dan tidak selalu disadari yang membentuk cara seseorang berpikir, merasakan, dan bertindak. Root belief adalah keyakinan dasar yang terbentuk sejak dini dalam hidup seseorang. Keyakinan ini bekerja di bawah sadar dan sering menjadi akar dari pola pikir negatif, kecemasan, perfeksionisme, atau perilaku menghindar.`,
      aspects: [
        {
          name: "Pertanyaan Reflektif",
          detail:
            "tentang perasaan, pengalaman masa lalu, dan pola hubungan. Menggali keyakinan terdalam yang menjadi dasar pola pikir atau masalah psikologis tertentu.",
        },
        {
          name: "Pernyataan Keyakinan",
          detail:
            "Membantu seseorang memahami kenapa mereka terus-menerus mengalami pola yang sama dalam hidup (misalnya: selalu merasa gagal, sulit mempercayai orang).",
        },
        { name: "Identifikasi Pola" },
      ],
      icon: <Lightbulb size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "mindset-test",
      number: "03",
      title: "Mindset Test",
      description: `Tes atau asesmen psikologi yang digunakan untuk mengukur pola pikir (Mindset) seseorang—khususnya tentang bagaimana seseorang memandang kemampuan, tantangan, kegagalan, dan perkembangan dirinya. Tes ini sangat populer dalam konteks psikologi pendidikan, pengembangan diri, dan kepemimpinan. Mindset Test membantu seseorang menyadari bagaimana mereka memandang diri sendiri dan proses belajar. Ini penting karena mindset sangat memengaruhi motivasi, ketekunan, dan kesuksesan jangka panjang.`,
      aspects: [
        {
          name: "Keyakinan tentang Kemampuan dan Kecerdasan",
          detail:
            "Apakah seseorang percaya bahwa kemampuan bawaan (seperti kecerdasan atau bakat) bersifat tetap atau bisa dikembangkan?",
        },
        {
          name: "Sikap terhadap Tantangan",
          detail:
            "Apakah seseorang cenderung menghindari atau menyambut tantangan baru?",
        },
        {
          name: "Respons terhadap Kegagalan",
          detail:
            "Bagaimana seseorang menafsirkan kegagalan sebagai akhir, atau sebagai peluang untuk belajar?",
        },
        {
          name: "Tanggapan terhadap Kritik dan Masukan",
          detail:
            "Apakah seseorang terbuka terhadap kritik atau malah defensif?",
        },
        {
          name: "Persepsi terhadap Usaha",
          detail:
            "Apakah seseorang melihat usaha sebagai hal penting untuk sukses atau merasa bahwa usaha tidak banyak membantu jika tidak berbakat?",
        },
        {
          name: "Persepsi terhadap Perubahan dan Pembelajaran",
          detail:
            "Apakah seseorang percaya bahwa diri dan orang lain bisa berubah dan belajar sepanjang hidup?",
        },
      ],
      icon: <Briefcase size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "iq-test",
      number: "04",
      title: "IQ Test",
      description: `Intelligence Quotient Test adalah tes standar yang dirancang untuk mengukur tingkat kecerdasan intelektual seseorang, terutama dalam hal kemampuan berpikir logis, pemecahan masalah, penalaran abstrak, dan pemahaman verbal maupun numerik. Tes IQ adalah alat bantu penting untuk memahami kemampuan kognitif seseorang, tetapi bukan satu-satunya indikator kesuksesan atau nilai seseorang. Kecerdasan sejati melibatkan berbagai aspek lain seperti emosi, karakter, dan kemampuan beradaptasi dalam kehidupan nyata.`,
      aspects: [
        {
          name: "Penalaran Logis (Logical Reasoning)",
          detail:
            "Mengukur kemampuan menganalisis pola, sebab-akibat, dan hubungan logis.",
        },
        {
          name: "Kecerdasan Verbal (Verbal Intelligence)",
          detail:
            "Mengukur kemampuan menggunakan dan memahami kata, bahasa, dan konsep verbal.",
        },
        {
          name: "Kecerdasan Numerik (Numerical Reasoning)",
          detail:
            "Mengukur kemampuan dalam berpikir dengan angka dan konsep matematika dasar.",
        },
        {
          name: "Visual-Spatial Reasoning (Penalaran Visual dan Spasial)",
          detail:
            "Mengukur kemampuan memahami bentuk, orientasi, pola visual, dan hubungan ruang.",
        },
        {
          name: "Ingatan Jangka Pendek (Short-term Memory)",
          detail:
            "Menilai kemampuan menyimpan dan mengolah informasi dalam waktu singkat.",
        },
        {
          name: "Kecepatan Pemrosesan (Processing Speed)",
          detail:
            "Mengukur seberapa cepat seseorang dapat mengerti dan merespons informasi.",
        },
      ],
      icon: <Target size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "papikostik-test",
      number: "05",
      title: "Papikostik Test",
      description: `Papikostik Test adalah singkatan dari "PAPI Kostick" sebuah tes psikologi yang digunakan untuk mengukur kepribadian dan perilaku kerja seseorang. Papikostik Test adalah alat ukur kepribadian kerja yang dirancang untuk membantu organisasi memahami bagaimana seseorang bekerja, berinteraksi, dan berkontribusi dalam lingkungan profesional.`,
      aspects: [
        {
          name: "Perseverance",
          detail:
            "Kegigihan, ketekunan, tidak mudah menyerah dalam menyelesaikan tugas",
        },
        { name: "Work Tempo", detail: "Ritme dan kecepatan kerja" },
        {
          name: "Vigour / Vitality",
          detail: "Energikerja, antusiasme, dan inisiatif",
        },
        {
          name: "Leadership",
          detail:
            "Dorongan untuk memimpin, mengatur, dan memengaruhi orang lain",
        },
        {
          name: "Responsibility",
          detail: "Tingkat tanggung jawab terhadap tugas dan peran",
        },
        {
          name: "Social Nature",
          detail: "Kemampuan bersosialisasi, keramahan, dan interaksi sosial",
        },
        {
          name: "Objectivity",
          detail:
            "Sikap objektif, rasional, dan tidak emosional dalam menilai situasi",
        },
        {
          name: "Emotional Control / Zest",
          detail: "Kemampuan mengendalikan emosi, tetap tenang saat tekanan",
        },
        {
          name: "Need for Achievement",
          detail: "Dorongan untuk sukses, pencapaian, dan hasil tinggi",
        },
        {
          name: "Loyalty",
          detail: "Tingkat kesetiaan dan dedikasi pada perusahaan atau tim",
        },
      ],
      icon: <Users size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "spiritual-quotient",
      number: "06",
      title: "Spiritual Quotient (SQ)",
      description: `Spiritual Quotient (SQ) atau Kecerdasan Spiritual adalah kemampuan seseorang untuk memahami makna hidup yang lebih dalam, memiliki kesadaran diri yang tinggi, serta mampu mengintegrasikan nilai-nilai spiritual dalam cara berpikir, bersikap, dan bertindak. Kecerdasan ini melengkapi IQ (kecerdasan intelektual) dan EQ (kecerdasan emosional), terutama dalam hal pemaknaan hidup, etika, dan tujuan eksistensial. Spiritual Quotient (SQ) adalah dimensi kecerdasan terdalam yang membantu manusia: • Menemukan makna dalam hidup • Bertindak berdasarkan nilai dan kesadaran batin • Menghadapi hidup dengan damai, bijak, dan utuh. SQ bukan soal agama tertentu, melainkan tentang koneksi batin manusia terhadap nilai-nilai tertinggi dan hakikat keberadaan.`,
      aspects: [
        {
          name: "Critical Existential Thinking",
          detail:
            "Anda secara konsisten menerapkan pemikiran kritis untuk merenungkan masalah eksistensial. Anda memiliki kemampuan yang kuat untuk menyelidiki sifat keberadaan, realitas, dan isu eksistensial dengan kecermatan.",
        },
        {
          name: "Personal Meaning Production",
          detail:
            "Anda memiliki kemampuan yang kuat dalam mencari makna pribadi dari pengalaman dan mampu mengambil keputusan yang sejalan dengan tujuan hidup Anda. Anda memiliki pemahaman yang mendalam tentang tujuan hidup Anda dan memiliki keseimbangan yang baik antara eksplorasi diri dan pengarahan kehidupan.",
        },
        {
          name: "Transcedental Awareness",
          detail:
            "Anda memiliki kemampuan yang kuat dalam mengenali dimensi transenden atau gambar transenden dari diri sendiri, orang lain, dan dunia fisik. Anda memiliki kesadaran yang dalam tentang hubungan yang kompleks antara aspek fisik dan transenden dalam kehidupan sehari-hari.",
        },
        {
          name: "Conscious State Expansion",
          detail:
            "Anda memiliki kemampuan yang kuat dalam masuk ke keadaan kesadaran spiritual yang lebih tinggi melalui praktik refleksi, meditasi, atau doa. Anda memiliki pemahaman yang dalam tentang kesadaran dunia material dan kesadaran spiritual, dan mampu mengalami dan mengintegrasikan pengalaman ini secara lebih konsisten.",
        },
      ],
      icon: <Lightbulb size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "dark-triad",
      number: "07",
      title: "Dark Triad",
      description: `Tes Dark Triad adalah alat asesmen psikologi yang digunakan untuk mengukur tiga ciri kepribadian gelap atau manipulatif, yang secara kolektif disebut sebagai "Dark Triad". Tes Dark Triad adalah tes psikologi untuk mengukur tiga sisi gelap kepribadian: narsisisme, machiavellianisme, dan psikopati. Tes ini membantu memahami bagaimana seseorang bisa menggunakan pengaruh atau kekuasaan dengan cara manipulatif atau tidak etis, dan sering digunakan dalam kajian psikologi kepribadian modern.`,
      aspects: [
        { name: "Narsisisme (Narcissism)" },
        { name: "Machiavellianisme (Machiavellianism)" },
        { name: "Psikopati (Psychopathy)" },
      ],
      icon: <Shield size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "seven-talenta",
      number: "08",
      title: "7 Talenta",
      description: `Tes 7 Talenta adalah alat asesmen psikologi yang bertujuan untuk menggali potensi alami atau bakat utama seseorang dalam 7 dimensi atau kategori talenta. Tes ini banyak digunakan dalam konteks pengembangan diri, karier, pendidikan, dan pelayanan, terutama di lingkungan yang menggabungkan psikologi dan spiritualitas. Tes 7 Talenta adalah alat bantu untuk mengenali potensi alami dalam diri seseorang. Dengan mengetahui talenta utama, seseorang bisa mengambil keputusan hidup yang lebih selaras dengan kekuatan aslinya—baik untuk karier, pendidikan, maupun kontribusi sosial atau spiritual.`,
      aspects: [
        { name: "DREAMER" },
        { name: "ARCHITECT" },
        { name: "BUILDER" },
        { name: "SHAPER" },
        { name: "HARVESTER" },
        { name: "RE-INVENTER" },
        { name: "OPERATOR" },
      ],
      icon: <Award size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "seven-karakter",
      number: "09",
      title: "7 Karakter",
      description: `Tes 7 Karakter adalah alat asesmen psikologi yang digunakan untuk menggali tipe karakter dominan seseorang berdasarkan kepribadian, pola pikir, cara berinteraksi, dan cara bekerja. Tes ini bertujuan untuk membantu seseorang memahami dirinya lebih dalam, sehingga bisa lebih tepat dalam memilih karier, gaya komunikasi, hingga peran dalam tim atau organisasi. Tes 7 Karakter adalah alat bantu untuk memahami cara berpikir, bersikap, dan berperilaku seseorang berdasarkan tipe karakter utama. Tes ini membantu membangun kesadaran diri, meningkatkan kerja sama dalam tim, dan menentukan jalur karier atau kehidupan yang sesuai dengan kepribadianmu.`,
      aspects: [
        { name: "PENJAJAH" },
        { name: "PENYAMUN" },
        { name: "PENGAWAS" },
        { name: "PETANI" },
        { name: "PENGGEMBALA" },
        { name: "PELAYAN" },
        { name: "PARENT" },
      ],
      icon: <UserCheck size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "grit-quiz",
      number: "10",
      title: "Grit Quiz",
      description: `Grit Quiz adalah sebuah tes psikologi yang digunakan untuk mengukur tingkat "grit" seseorang—yaitu kegigihan dan ketekunan jangka panjang dalam mencapai tujuan, meskipun menghadapi hambatan, kegagalan, atau proses yang panjang. Grit Quiz adalah tes untuk mengukur seberapa gigih dan tekun seseorang dalam mencapai tujuan jangka panjang. Grit adalah kombinasi dari semangat yang konsisten dan usaha yang berkelanjutan, dan telah terbukti sebagai salah satu faktor penting dalam kesuksesan dan ketahanan hidup.`,
      aspects: [
        { name: "Mengukur kegigihan individu dalam melakukan pekerjaan" },
        { name: "Menentukan score kegigihan kamu (0/10)" },
        { name: "Menentukan Classification Kamu" },
      ],
      icon: <TrendingUp size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "coping-stress",
      number: "11",
      title: "Coping Stress",
      description: `Tes Coping Stress adalah alat asesmen psikologi yang digunakan untuk mengukur bagaimana seseorang mengatasi atau merespons stres. Tes ini bertujuan untuk memahami strategi coping (mekanisme penyesuaian diri) yang digunakan seseorang saat menghadapi tekanan, tantangan, atau masalah dalam hidup. Tes Coping Stress adalah alat untuk mengevaluasi cara seseorang merespons stres dan tantangan hidup. Tes ini membantu memahami apakah seseorang cenderung menyelesaikan masalah secara aktif atau menghindarinya secara emosional, serta memberikan wawasan untuk pengembangan strategi coping yang lebih baik.`,
      aspects: [
        {
          name: "Confrontative Coping",
          detail:
            "Anda cenderung secara aktif atau agresif mencari cara untuk mengatasi keadaan yang menekan.",
        },
        {
          name: "Planful Problem Solving",
          detail:
            "Anda berusaha untuk mengubah keadaan secara hati-hati dengan menganalisis masalah yang dihadapi, membuat perencanaan pemecahan masalah, lalu memilih alternatif pemecahan masalah tersebut.",
        },
        {
          name: "Seeking Social Support",
          detail:
            "Anda berusaha mencari dukungan dari pihak-pihak di luar diri Anda yang berupa dukungan emosional ataupun informasi.",
        },
        {
          name: "Distancing",
          detail:
            "Anda cenderung berusaha melepaskan diri sejenak dan mengambil jarak dari masalah yang dihadapi.",
        },
        {
          name: "Self Controlling",
          detail:
            "Anda berusaha untuk mengendalikan perasaan maupun tindakan yang akan diambil",
        },
        {
          name: "Accepting Responsibility",
          detail:
            "Anda sadar akan peran Anda dalam permasalahan yang dihadapi dan mencoba memperjelas masalah secara objektif.",
        },
        {
          name: "Escape Avoidance",
          detail:
            "Anda memiliki sedikit kecenderungan berusaha menghindari atau melarikan diri dari permasalahan dengan cara menyangkal.",
        },
        {
          name: "Positive Reappraisal",
          detail:
            "Anda sangat berusaha menciptakan makna positif yang lebih ditujukan untuk pengembangan pribadi, juga melibatkan hal-hal yang religius.",
        },
      ],
      icon: <MessageSquare size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "personal-values",
      number: "12",
      title: "Personal Values",
      description: `Personal values atau nilai-nilai pribadi adalah prinsip, keyakinan, atau standar internal yang menjadi pedoman bagi seseorang dalam berpikir, bersikap, dan bertindak. Nilai-nilai ini mencerminkan apa yang dianggap penting dan bermakna oleh individu dalam hidupnya. Tes personal values bukan sekadar tes psikologis biasa, tapi alat refleksi diri yang kuat untuk hidup lebih otentik, terarah, dan bermakna.`,
      aspects: [
        { name: "Schwartz Value Survey (SVS)" },
        { name: "Rokeach Value Survey" },
        { name: "Barrett Values Centre Assessment" },
      ],
      icon: <Briefcase size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "locus-of-control",
      number: "13",
      title: "Locus of Control",
      description: `Tes Locus of Control adalah alat psikologi yang digunakan untuk mengetahui bagaimana seseorang memandang penyebab dari peristiwa yang terjadi dalam hidupnya—apakah dia merasa memiliki kendali atas hidupnya, atau merasa bahwa hidupnya dikendalikan oleh faktor eksternal seperti nasib, orang lain, atau keberuntungan. Tes Locus of Control adalah alat reflektif yang berguna untuk memahami seberapa besar kamu merasa bertanggung jawab atas hidupmu. Ini bisa menjadi langkah awal untuk perubahan sikap, pengembangan pribadi, dan membangun hidup yang lebih sadar dan terarah.`,
      aspects: [
        { name: "Internal Locus of Control" },
        { name: "External Locus of Control" },
      ],
      icon: <Target size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "big5",
      number: "14",
      title: "Big5",
      description: `Tes Big Five atau Tes Lima Faktor Kepribadian adalah salah satu tes psikologi paling terkenal dan ilmiah untuk mengukur kepribadian seseorang. Tes ini menilai lima dimensi utama dari kepribadian manusia. Tes Big Five memberikan gambaran kepribadian yang komprehensif, netral, dan berbasis riset ilmiah. Tidak ada hasil “baik” atau “buruk”—semua dimensi menggambarkan kecenderungan, bukan penilaian moral.`,
      aspects: [
        { name: "Openness to Experience (Keterbukaan terhadap Pengalaman)" },
        { name: "Conscientiousness (Kecermatan / Tanggung Jawab)" },
        { name: "Neuroticism (Kestabilan Emosi / Neurotisisme)" },
        {
          name: "Agreeableness (Sifat Menyenangkan / Kemampuan Menyesuaikan Diri)",
        },
        { name: "Extraversion (Ekstroversi)" },
      ],
      icon: <Users size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "im4",
      number: "15",
      title: "IM4",
      description: `Asesmen psikologi yang dirancang untuk mengukur kapasitas mental dan profil kepribadian seseorang secara komprehensif. Dikembangkan oleh PowerCharacter, tes ini bertujuan untuk membantu individu memahami potensi, kendala psikologis, dan integritas moral mereka. Tes IM4 adalah alat yang efektif untuk memahami lebih dalam tentang kapasitas mental dan profil kepribadian seseorang. Dengan informasi yang diperoleh, individu dapat melakukan pengembangan diri yang lebih terarah dan efektif.`,
      aspects: [
        { name: "Taraf Kapasitas Mental" },
        { name: "Profil Keterbukaan" },
        { name: "Profil Mental" },
      ],
      icon: <MapPin size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "aq",
      number: "16",
      title: "Adversity Quotient Test (AQ)",
      description: `Adversity Quotient Test adalah alat psikologi yang digunakan untuk mengukur kemampuan seseorang dalam menghadapi, mengatasi, dan bangkit dari kesulitan atau tantangan hidup. Konsep Adversity Quotient (AQ) diperkenalkan oleh Dr. Paul G. Stoltz, dan AQ dianggap sebagai ukuran "daya tahan mental" seseorang—seberapa baik seseorang mampu bertahan dan tetap produktif dalam situasi sulit.`,
      aspects: [
        {
          name: "Control",
          detail:
            "Kemungkinan Anda meresponi peristiwa-peristiwa buruk sebagai sesuatu yang sekurang-kurangnya berada dalam kendali Anda, tergantung pada besarnya peristiwa tersebut. Anda mungkin bukan seseorang yang mudah berkecil hati, tetapi Anda akan mengalami kesulitan mempertahankan perasaan mampu memegang kendali terhadap kemunduran-kemunduran atau tantangan-tantangan yang lebih berat.",
        },
        {
          name: "Origin Ownership",
          detail:
            "Anda meresponi peristiwa-peristiwa yang penuh dengan kesulitan sebagai sesuatu yang kadang-kadang berasal dari luar dan kadang-kadang berasal dari diri Anda sendiri. Anda menganggap diri Anda ikut bertanggung jawab terhadap akibat-akibat yang timbul dari suatu masalah. Anda membatasi tanggung jawab Anda hanya pada hal-hal dimana Anda adalah penyebab langsung permasalahan tersebut dan tidak memberikan lebih banyak kontribusi.",
        },
        {
          name: "Reach",
          detail:
            "Anda meresponi peristiwa-peristiwa yang mengandung kesulitan sebagai sesuatu yang spesifik namun terkadang Anda membiarkan peristiwa-peristiwa tersebut masuk ke wilayah lain dalam kehidupan Anda. Pada saat Anda mengalami kekecewaan, mungkin saja Anda menganggap hal tersebut sebagai malapetaka dan mengandalkan orang lain untuk menarik Anda keluar dari sumur emosional yang Anda bangun sendiri.",
        },
        {
          name: "Endurance",
          detail:
            "Semakin besar kemungkinan Anda memandang kesulitan dan penyebab-penyebabnya sebagai peristiwa yang berlangsung lama, dan menganggap peristiwa-peristiwa positif sebagai sesuatu yang bersifat sementara. Akibatnya akan memunculkan perasaan tidak berdaya atau hilang harapan.",
        },
      ],
      icon: <Zap size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "eq",
      number: "17",
      title: "EQ",
      description: `Tes EQ atau tes Emotional Quotient (Kecerdasan Emosional) adalah alat ukur untuk mengetahui sejauhmanaseseorangmampu: 1. Mengenaliemosinyasendiri 2. Mengelolaemosisecarasehat 3. Mengenaliemosioranglain(empati) 4. Menjalinhubungansosialyangpositif 5. Mengambilkeputusanberdasarkanpemahamanemosional.`,
      aspects: [
        { name: "Motivasi Diri (Self-Motivation)" },
        { name: "Pengelolaan Diri (Self-Regulation / Self-Management)" },
        { name: "Empati (Social Awareness)" },
        { name: "Kesadaran Diri (Self-Awareness)" },
        { name: "Keterampilan Sosial (Relationship Management)" },
      ],
      icon: <Users size={24} style={{ color: "#02A345" }} />,
    },
    {
      id: "leadership-test",
      number: "18",
      title: "Leadership Test",
      description: `Tes kepemimpinan (leadership test) adalah alat evaluasi yang digunakan untuk menilai kemampuan, gaya, dan potensi seseorang sebagai pemimpin. Tes ini sering digunakan dalam rekrutmen, promosi jabatan, pelatihan manajerial, atau pengembangan pribadi. Tes kepemimpinan adalah alat penting untuk menilai potensi, gaya, dan efektivitas seseorang dalam memimpin. Tes ini membantu memahami kekuatan dan kelemahan dalam memimpin tim, membuat keputusan, berkomunikasi, serta mengelola konflik dan perubahan.`,
      aspects: [
        { name: "Warna Dominan", detail: "(Audio, Visual, Kinestetic)" },
        {
          name: "Kekuatan Karakter",
          detail:
            "Menilai apakah seseorang memimpin dengan karakter kuat yang menciptakan kepercayaan, keteladanan, dan dampak jangka panjang.",
        },
        {
          name: "Kekuatan Emosi",
          detail:
            "Menilai kemampuan mengelola emosi, membangun hubungan, dan mengarahkan orang lain secara emosional cerdas.",
        },
        {
          name: "Ketakutan Terbesar",
          detail:
            "Ketakutan terbesar Anda ketika terlihat buruk di hadapan orang lain.",
        },
        {
          name: "Kekuatan Nilai Bagi Organisasi",
          detail:
            "Anda adalah seorang yang mampu mencapai target organisasi dengan menggerakkan orang-orang di sekeliling.",
        },
        {
          name: "Kekuatan Efektivitas Kerja",
          detail:
            "Mengukur gaya kepemimpinan, kekuatan personal, dan efektivitas dalam bekerja tim maupun individu.",
        },
        {
          name: "Yang Perlu Diwaspadai",
          detail:
            "Mengenali sisi-sisi yang bisa menjadi penghambat dalam kepemimpinan—baik dari segi sikap, pola pikir, maupun perilaku.",
        },
      ],
      icon: <Briefcase size={24} style={{ color: "#02A345" }} />,
    },
  ];

  return (
    <div className="pt-32">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Kembali ke Layanan</span>
          </Link>

          {/* Hero Section for Personal Mapping */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              PERSONAL <span style={{ color: "#02A345" }}>MAPPING</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap bisnis sangat dipengaruhi oleh visi, karakter, dan
              preferensi pemiliknya. Dengan personal mapping, konsultan bisa
              membantu menyusun strategi bisnis yang tidak hanya masuk akal
              secara finansial, tetapi juga sejalan dengan jati diri dan tujuan
              hidup si pengusaha.
            </p>
            <div className="mt-8">
              <img
                src="/images/personal-mapping/personal-mapping.jpg"
                alt="Personal Mapping Overview"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover h-64"
              />
            </div>
            <p className="text-gray-700 mt-6 text-xl font-semibold">
              Setiap test memiliki bobot dan sudut pandang yang berbeda, oleh
              sebab itu test dibagi hingga 18 bagian pertanyaan dengan topik
              yang berbeda.
            </p>
            <p className="text-gray-600 mt-2 text-lg">
              Bersifat Umum Untuk Siapapun, Waktu Pengerjaan Dibebaskan
            </p>
          </div>

          {/* Individual Test Sections */}
          {tests.map((test) => (
            <div
              key={test.id}
              id={test.id}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                  style={{ backgroundColor: "#02A345", color: "white" }}
                >
                  {test.number}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {test.title}
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {test.description}
              </p>

              {test.aspects && (
                <div className="space-y-6 mt-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Aspek yang Diukur:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {test.aspects.map((aspect, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        {test.icon}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {aspect.name}
                          </h4>
                          {aspect.detail && (
                            <p className="text-gray-600">{aspect.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Siap menemukan potensi terbaik Anda?
            </p>
            <Link
              to="/contact"
              className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              style={{ backgroundColor: "#02A345" }}
            >
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalMapping;
