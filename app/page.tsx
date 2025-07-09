import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Star, Zap, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              혁신적인 기술로<br />
              <span className="text-yellow-300 animate-pulse-slow">비즈니스의 미래</span>를 만듭니다
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              최첨단 기술 솔루션으로 고객의 디지털 전환을 지원하고, 
              지속 가능한 성장을 위한 파트너가 되겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="btn-primary inline-flex items-center group"
              >
                서비스 알아보기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline inline-flex items-center group"
              >
                문의하기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">완료 프로젝트</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">전문 개발자</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">고객 만족도</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">10년+</div>
              <div className="text-gray-600 font-medium">업계 경험</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              우리의 <span className="gradient-text">서비스</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              다양한 분야의 전문 서비스를 통해 고객의 비즈니스 성장을 지원합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover p-8 animate-fade-in-left" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">웹 개발</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                현대적이고 반응형 웹사이트 및 웹 애플리케이션 개발
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>반응형 디자인</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>SEO 최적화</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>성능 최적화</span>
                </li>
              </ul>
            </div>

            <div className="card-hover p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">모바일 앱</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                iOS 및 Android 플랫폼을 위한 네이티브 모바일 애플리케이션
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>iOS/Android 개발</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>크로스 플랫폼</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>앱스토어 등록</span>
                </li>
              </ul>
            </div>

            <div className="card-hover p-8 animate-fade-in-right" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">클라우드 솔루션</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AWS, Azure, GCP를 활용한 클라우드 인프라 구축 및 관리
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>클라우드 마이그레이션</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>DevOps 구축</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>24/7 모니터링</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              왜 <span className="text-yellow-300">TechCorp</span>를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              우리만의 특별한 장점들을 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-left" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">최고 품질</h3>
              <p className="text-gray-300 leading-relaxed">
                10년간의 경험을 바탕으로 최고 품질의 서비스를 제공합니다
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">빠른 개발</h3>
              <p className="text-gray-300 leading-relaxed">
                최신 기술과 효율적인 프로세스로 빠른 개발을 보장합니다
              </p>
            </div>

            <div className="text-center animate-fade-in-right" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">글로벌 지원</h3>
              <p className="text-gray-300 leading-relaxed">
                전 세계 어디서든 24/7 기술 지원을 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            프로젝트를 시작해보세요
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            전문 팀과 함께 당신의 비전을 현실로 만들어보세요. 
            무료 상담을 통해 최적의 솔루션을 제안해드립니다.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary inline-flex items-center group text-lg px-8 py-4"
          >
            무료 상담 신청
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
} 