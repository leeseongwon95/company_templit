# TechCorp 회사 홈페이지

Next.js 14와 TypeScript를 사용하여 제작된 모던한 회사 홈페이지입니다.

## 🚀 주요 기능

- **페이지 라우팅**: Next.js App Router를 사용한 페이지 기반 라우팅
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스 지원
- **모던 UI**: Tailwind CSS를 활용한 깔끔하고 현대적인 디자인
- **타입 안전성**: TypeScript로 작성되어 타입 안전성 보장
- **SEO 최적화**: 메타데이터 및 구조화된 마크업

## 📁 페이지 구성

- **홈** (`/`) - 메인 랜딩 페이지
- **회사소개** (`/about`) - 회사 미션, 비전, 연혁
- **서비스** (`/services`) - 제공 서비스 소개
- **포트폴리오** (`/portfolio`) - 완료된 프로젝트들
- **뉴스** (`/news`) - 회사 소식 및 업계 동향
- **채용** (`/careers`) - 채용 정보 및 복리후생
- **문의** (`/contact`) - 문의 폼 및 연락처 정보

## 🛠️ 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: Blue (#3b82f6, #2563eb, #1d4ed8)
- **Secondary**: Gray (#64748b, #475569)
- **Background**: White, Gray-50, Gray-900

### 타이포그래피

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 커스터마이징

### 색상 변경

`tailwind.config.js`에서 primary 색상을 변경할 수 있습니다:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6', // 메인 색상
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### 로고 변경

`components/Navbar.tsx`와 `components/Footer.tsx`에서 로고를 변경할 수 있습니다.

### 콘텐츠 수정

각 페이지 파일에서 텍스트와 이미지를 수정할 수 있습니다.

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

---

**TechCorp** - 혁신적인 기술로 비즈니스의 미래를 만듭니다. 