import { Newspaper, Calendar, Tag, ArrowRight, TrendingUp, Users, Zap, Star, Clock } from 'lucide-react'

export default function News() {
  const news = [
    {
      title: "TechCorp, AI 기술 개발 성과 발표",
      date: "2024-01-15",
      category: "기술",
      excerpt: "최신 AI 기술을 활용한 새로운 솔루션 개발에 성공했습니다. 자연어 처리와 컴퓨터 비전 기술을 결합한 혁신적인 플랫폼을 구축하여 고객의 비즈니스 효율성을 크게 향상시켰습니다.",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      readTime: "5분"
    },
    {
      title: "2024년 신입 개발자 채용 시작",
      date: "2024-01-10",
      category: "채용",
      excerpt: "우수한 인재들과 함께 성장할 수 있는 기회를 제공합니다. 다양한 분야의 개발자 포지션을 모집하며, 체계적인 교육 프로그램과 성장 환경을 제공합니다.",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
      readTime: "3분"
    },
    {
      title: "클라우드 서비스 확장 안내",
      date: "2024-01-05",
      category: "서비스",
      excerpt: "AWS, Azure 외 GCP 서비스도 추가로 제공합니다. 고객의 다양한 요구사항에 맞춰 최적의 클라우드 솔루션을 제공하며, 비용 효율성과 성능을 모두 고려한 서비스를 제공합니다.",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      readTime: "4분"
    },
    {
      title: "보안 솔루션 업그레이드 완료",
      date: "2024-01-01",
      category: "보안",
      excerpt: "최신 보안 위협에 대응할 수 있는 고도화된 보안 솔루션을 개발했습니다. 실시간 위협 탐지 및 대응 시스템을 통해 고객의 데이터를 안전하게 보호합니다.",
      icon: Star,
      gradient: "from-red-500 to-orange-500",
      readTime: "6분"
    }
  ]

  const categories = [
    { name: "전체", count: 4, active: true },
    { name: "기술", count: 1, active: false },
    { name: "채용", count: 1, active: false },
    { name: "서비스", count: 1, active: false },
    { name: "보안", count: 1, active: false }
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
              <Newspaper className="w-4 h-4 mr-2 text-yellow-300" />
              최신 소식과 업계 동향
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              뉴스
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              TechCorp의 최신 소식과 업계 동향을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <article key={index} className={`group relative ${index === 0 ? 'animate-fade-in-left' : index === 1 ? 'animate-fade-in-right' : index === 2 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      읽는 시간: {item.readTime}
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      자세히 보기
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16 animate-fade-in-up">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              더 많은 뉴스 보기
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            뉴스레터 구독
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            최신 소식과 업계 동향을 이메일로 받아보세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-6 py-4 border-2 border-gray-600 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              구독하기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 