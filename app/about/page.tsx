import { Users, Target, Award, Globe, Star, Calendar, TrendingUp, Zap } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              혁신적인 기술 회사
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              회사소개
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              2014년 설립 이후, TechCorp는 혁신적인 기술 솔루션으로 
              고객의 디지털 전환을 지원해왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-left">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">미션</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                최첨단 기술을 활용하여 고객의 비즈니스 성장을 지원하고, 
                지속 가능한 디지털 솔루션을 제공합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-500 transition-colors">
                    <Target className="h-3 w-3 text-green-600 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">고객 중심의 솔루션 제공</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-500 transition-colors">
                    <Award className="h-3 w-3 text-green-600 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">최고 품질의 서비스 보장</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-500 transition-colors">
                    <Globe className="h-3 w-3 text-green-600 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">글로벌 표준 준수</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">비전</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                기술 혁신의 선두주자로서, 더 나은 미래를 만들어가는 
                신뢰받는 파트너가 되겠습니다.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl border border-primary-100 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">
                  핵심 가치
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 text-lg font-medium">혁신 (Innovation)</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 text-lg font-medium">신뢰 (Trust)</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 text-lg font-medium">협력 (Collaboration)</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 text-lg font-medium">성장 (Growth)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              회사 연혁
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              10년간의 성장과 혁신의 여정
            </p>
          </div>

          <div className="space-y-12">
            {[
              { year: '2014', title: '회사 설립', description: '서울 강남구에서 5명의 개발자로 시작하여 웹 개발 서비스 제공', icon: '🚀' },
              { year: '2016', title: '모바일 앱 개발 진입', description: 'iOS/Android 앱 개발 서비스 추가, 첫 번째 대형 프로젝트 완료', icon: '📱' },
              { year: '2019', title: '클라우드 서비스 확장', description: 'AWS, Azure 클라우드 솔루션 제공, DevOps 서비스 시작', icon: '☁️' },
              { year: '2022', title: 'AI/ML 서비스 도입', description: '인공지능 및 머신러닝 솔루션 개발, 연구개발팀 확장', icon: '🤖' },
              { year: '2024', title: '글로벌 확장', description: '해외 지사 설립, 글로벌 고객 서비스 제공, 50명 규모로 성장', icon: '🌍' }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center group ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="lg:w-1/4 text-center lg:text-left mb-6 lg:mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary-400 mt-4">{item.year}</div>
                </div>
                <div className="lg:w-3/4 lg:pl-12">
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              우리 팀
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 분야의 전문가들이 모여 최고의 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: '개발팀', count: '25명', description: '프론트엔드, 백엔드, 모바일 개발 전문가들', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Target, title: '기획팀', count: '8명', description: 'UX/UI 디자인, 프로젝트 관리 전문가들', gradient: 'from-purple-500 to-pink-500' },
              { icon: Award, title: '영업팀', count: '12명', description: '고객 관리, 비즈니스 개발 전문가들', gradient: 'from-green-500 to-emerald-500' }
            ].map((member, index) => (
              <div key={index} className={`text-center group ${index === 0 ? 'animate-fade-in-left' : index === 1 ? 'animate-fade-in-up' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-28 h-28 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className="h-14 w-14 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.title}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">{member.count}</div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            함께 성장해요
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            혁신적인 기술과 창의적인 아이디어로 더 나은 미래를 만들어갑니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              채용 정보 보기
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 