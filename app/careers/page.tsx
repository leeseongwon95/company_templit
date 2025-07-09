import { Briefcase, MapPin, Clock, Users, Star, Heart, Zap, BookOpen, Coffee, Gift, Shield, TrendingUp } from 'lucide-react'

export default function Careers() {
  const positions = [
    {
      title: "시니어 프론트엔드 개발자",
      department: "개발팀",
      type: "정규직",
      location: "서울 강남구",
      description: "React, TypeScript를 활용한 웹 애플리케이션 개발",
      requirements: ["5년 이상의 프론트엔드 개발 경험", "React, TypeScript 숙련자", "성능 최적화 경험"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "백엔드 개발자",
      department: "개발팀",
      type: "정규직",
      location: "서울 강남구",
      description: "Node.js, Python을 활용한 서버 개발",
      requirements: ["3년 이상의 백엔드 개발 경험", "Node.js, Python 숙련자", "데이터베이스 설계 경험"],
      icon: Zap,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps 엔지니어",
      department: "인프라팀",
      type: "정규직",
      location: "서울 강남구",
      description: "클라우드 인프라 구축 및 운영",
      requirements: ["AWS, Azure 클라우드 경험", "Docker, Kubernetes 숙련자", "CI/CD 파이프라인 구축 경험"],
      icon: Shield,
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  const benefits = [
    { title: "유연근무제", description: "자유로운 출퇴근 시간", icon: Clock, gradient: "from-blue-500 to-cyan-500" },
    { title: "원격근무 지원", description: "재택근무 가능", icon: Users, gradient: "from-green-500 to-emerald-500" },
    { title: "교육비 지원", description: "연간 300만원까지", icon: BookOpen, gradient: "from-purple-500 to-pink-500" },
    { title: "건강보험", description: "4대보험 완비", icon: Heart, gradient: "from-red-500 to-orange-500" },
    { title: "퇴직연금", description: "퇴직연금 제도", icon: Shield, gradient: "from-indigo-500 to-blue-500" },
    { title: "경조사 지원", description: "경조사 지원금", icon: Gift, gradient: "from-yellow-500 to-orange-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4 mr-2 text-yellow-300" />
              함께 성장할 인재를 찾습니다
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              채용
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              혁신적인 기술과 함께 성장할 인재를 찾습니다
            </p>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              채용 포지션
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              현재 모집 중인 포지션입니다
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className={`group relative ${index === 0 ? 'animate-fade-in-left' : index === 1 ? 'animate-fade-in-up' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${position.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <position.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-2">{position.department}</p>
                        <p className="text-gray-700 leading-relaxed">{position.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end space-y-3">
                      <div className="flex items-center space-x-4">
                        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {position.type}
                        </span>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{position.location}</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        지원하기
                      </button>
                    </div>
                  </div>
                  
                  {/* Requirements */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 요구사항</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              복리후생
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              직원들의 성장과 웰빙을 위한 다양한 혜택을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center group ${index === 0 ? 'animate-fade-in-left' : index === 1 ? 'animate-fade-in-up' : index === 2 ? 'animate-fade-in-right' : index === 3 ? 'animate-fade-in-left' : index === 4 ? 'animate-fade-in-up' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
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
              이력서 제출하기
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