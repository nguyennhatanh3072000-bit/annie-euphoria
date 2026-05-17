export type Lang = 'vi' | 'en'

export type TranslationCopy = {
  navCta: string
  heroDesc: string
  btnBook: string
  btnSvc: string
  stat1: string
  stat2: string
  stat3: string
  stat4: string
  aboutEy: string
  aboutTitle: string
  aboutQ: string
  aboutP1: string
  aboutP2: string
  chip: [string, string, string, string, string]
  svcEy: string
  svcTitle: string
  svcLead: string
  tabTea: string
  t1: [string, string, string]
  t2: [string, string, string]
  t3: [string, string, string]
  tl1: [string, string, string]
  tl2: [string, string, string]
  tl3: [string, string, string]
  revEy: string
  revTitle: string
  rev1svc: string
  rev2svc: string
  bookEy: string
  bookLead: string
  bookNoteTitle: string
  bookNoteBody: string
  bookBtn: string
  bookHint: string
  ftBook: string
  ftSub: string
}

export const translations: Record<Lang, TranslationCopy> = {
  vi: {
    navCta: 'Đặt lịch ✦',
    heroDesc:
      'A space to think out loud.<br><em>Sáng tỏ để bước tiếp.</em><br><br>Không phải bói toán — mà là một cuộc trò chuyện thật sự, không phán xét, để bạn nhìn rõ hơn điều mình đang mang.',
    btnBook: 'Đặt lịch ngay',
    btnSvc: 'Xem dịch vụ',
    stat1:
      '<strong>Năm kinh nghiệm</strong>Tarot, Tea Leaf & Feng Shui Crystals',
    stat2:
      '<strong>Gói dịch vụ Tarot</strong>Từ 1 câu hỏi đến 1 giờ không giới hạn',
    stat3:
      '<strong>Online · Toàn quốc</strong>Voice note hoặc text, linh hoạt theo bạn',
    stat4:
      '<strong>Tình cảm · Sự nghiệp · Gia đình</strong>Lắng nghe, không phán xét',
    aboutEy: 'About · Về mình',
    aboutTitle: 'Người giữ<br><em>cửa tiệm.</em>',
    aboutQ:
      '"Mình đã ngồi với những câu chuyện của người khác suốt 10 năm. Không phải đọc bài — mà là ngồi lại cùng."',
    aboutP1:
      'Thế mạnh không phải là đoán tương lai. Mà là lắng nghe — để bài tarot phản chiếu lại điều bạn đã biết nhưng chưa dám nhìn nhận.',
    aboutP2:
      'Tên cửa tiệm lấy từ một bài hát của BTS — về một nơi trong đầu bạn có thể chạy đến khi mọi thứ quá nặng. Không giải quyết gì cả. Chỉ là có chỗ để đặt xuống. Magic Shop là chỗ đó.',
    chip: [
      'Tình cảm & Hôn nhân',
      'Sự nghiệp',
      'Gia đình',
      'Đá phong thủy',
      'Tea Leaf Reading',
    ],
    svcEy: 'Services · Dịch vụ',
    svcTitle: 'Chọn<br><em>dịch vụ.</em>',
    svcLead:
      'Mỗi buổi là một cuộc trò chuyện thật sự — không áp lực, không phán xét.',
    tabTea: '🍃 Bài Trà · Tea Leaf',
    t1: [
      '1 Câu hỏi',
      'Khi bạn có một điều cụ thể cần câu trả lời rõ ràng và tập trung.',
      '/ câu hỏi',
    ],
    t2: [
      '5 Câu hỏi',
      'Toàn diện hơn khi bạn đang ở ngã rẽ và cần nhiều góc nhìn cùng lúc.',
      'gói 5 câu',
    ],
    t3: [
      '1 Giờ · Unlimited',
      'Hỏi bao nhiêu tùy bạn trong 1 tiếng. Không vội, không áp lực.',
      '/ giờ · không giới hạn câu',
    ],
    tl1: [
      '3 Tháng',
      'Xu hướng năng lượng 3 tháng tới. Phù hợp nếu đang ở giai đoạn chuyển tiếp.',
      'giai đoạn 3 tháng',
    ],
    tl2: [
      '6 Tháng',
      'Bức tranh rõ hơn về nửa năm phía trước — đủ để nhận ra pattern và chuẩn bị tâm thế.',
      'giai đoạn 6 tháng',
    ],
    tl3: [
      '12 Tháng',
      'Cái nhìn toàn năm — năng lượng theo từng mùa, những thời điểm cần chú ý.',
      'giai đoạn 12 tháng',
    ],
    revEy: 'Reviews · Phản hồi',
    revTitle: 'Khách hàng<br><em>nói gì.</em>',
    rev1svc: 'Tarot · 5 câu hỏi',
    rev2svc: 'Bài Trà · 6 tháng',
    bookEy: 'Booking · Đặt lịch',
    bookLead:
      'Nhấn nút bên dưới để điền form đặt lịch — mình sẽ xác nhận qua email trong vòng 2 tiếng.',
    bookNoteTitle: 'Trước khi đặt lịch',
    bookNoteBody:
      'Các dịch vụ đều thực hiện <strong>100% online</strong>, trả lời qua <strong>voice note hoặc text</strong>.<br>Thanh toán sau khi xác nhận lịch qua chuyển khoản.<br>Thời gian xử lý: <strong>trong ngày hoặc 1-2 ngày</strong> tùy lịch.',
    bookBtn: 'Điền form đặt lịch ✦',
    bookHint:
      'Hoặc liên hệ trực tiếp qua Instagram / Facebook / điện thoại nếu bạn có câu hỏi trước khi đặt 🌙',
    ftBook: 'Đặt lịch',
    ftSub:
      'Annie Reading Room · @byannie<br>Tarot · Tea Leaf · Feng Shui Crystals<br>Since 2015 · Online · Toàn quốc',
  },
  en: {
    navCta: 'Book Now ✦',
    heroDesc:
      "A space to think out loud.<br><em>Clarity to move forward.</em><br><br>Not fortune-telling — but a real conversation, without judgment, to help you see clearly what you're carrying.",
    btnBook: 'Book Now',
    btnSvc: 'View Services',
    stat1:
      '<strong>Years of Experience</strong>Tarot, Tea Leaf & Feng Shui Crystals',
    stat2:
      '<strong>Tarot Packages</strong>From 1 question to 1 unlimited hour',
    stat3:
      '<strong>Online · Nationwide</strong>Voice note or text, flexible for you',
    stat4: '<strong>Love · Career · Family</strong>Listen, without judgment',
    aboutEy: 'About',
    aboutTitle: 'The Keeper<br><em>of the Shop.</em>',
    aboutQ:
      '"I\'ve sat with other people\'s stories for 10 years. Not just reading cards — but sitting together."',
    aboutP1:
      "The strength isn't in predicting the future. It's in listening — so the tarot reflects back what you already know but haven't dared to face.",
    aboutP2:
      "The shop's name comes from a BTS song — about a place in your mind you can run to when everything feels too heavy. It doesn't fix anything. It's just a place to set things down. Magic Shop is that place.",
    chip: [
      'Love & Marriage',
      'Career',
      'Family',
      'Feng Shui Crystals',
      'Tea Leaf Reading',
    ],
    svcEy: 'Services',
    svcTitle: 'Choose a<br><em>Service.</em>',
    svcLead:
      'Each session is a real conversation — no pressure, no judgment.',
    tabTea: '🍃 Tea Leaf Reading',
    t1: [
      '1 Question',
      'When you have one specific thing that needs a clear, focused answer.',
      '/ question',
    ],
    t2: [
      '5 Questions',
      "More comprehensive when you're at a crossroads and need multiple perspectives at once.",
      '5-question package',
    ],
    t3: [
      '1 Hour · Unlimited',
      'Ask as much as you want in 1 hour. No rush, no pressure.',
      '/ hour · unlimited questions',
    ],
    tl1: [
      '3 Months',
      "Energy trends for the next 3 months. Great if you're in a transitional phase.",
      '3-month period',
    ],
    tl2: [
      '6 Months',
      'A clearer picture of the next half year — enough to recognize patterns and prepare mentally.',
      '6-month period',
    ],
    tl3: [
      '12 Months',
      'A full-year view — energy by season, moments worth watching.',
      '12-month period',
    ],
    revEy: 'Reviews',
    revTitle: 'What clients<br><em>say.</em>',
    rev1svc: 'Tarot · 5 Questions',
    rev2svc: 'Tea Leaf · 6 Months',
    bookEy: 'Booking',
    bookLead:
      "Click the button below to fill out the booking form — I'll confirm via email within 2 hours.",
    bookNoteTitle: 'Before You Book',
    bookNoteBody:
      'All services are <strong>100% online</strong>, answered via <strong>voice note or text</strong>.<br>Payment by bank transfer after booking confirmation.<br>Processing time: <strong>same day or 1-2 days</strong> depending on schedule.',
    bookBtn: 'Fill Out Booking Form ✦',
    bookHint:
      'Or contact directly via Instagram / Facebook / phone if you have questions before booking 🌙',
    ftBook: 'Booking',
    ftSub:
      'Annie Reading Room · @byannie<br>Tarot · Tea Leaf · Feng Shui Crystals<br>Since 2015 · Online · Nationwide',
  },
}
