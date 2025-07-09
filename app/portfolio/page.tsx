import { ExternalLink, Github, Globe, Smartphone, Monitor, Cloud, Database, Shield, Zap, Star, Users, TrendingUp } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: "이커머스 플랫폼",
      category: "웹 개발",
      description: "대형 온라인 쇼핑몰 플랫폼 구축으로 매출 300% 증가 달성",
      image: "/api/placeholder/400/300",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#",
      github: "#"
    },
    {
      title: "모바일 뱅킹 앱",
      category: "모바일 앱",
      description: "iOS/Android 뱅킹 애플리케이션으로 100만 다운로드 달성",
      image: "/api/placeholder/400/300",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      tech: ["React Native", "Firebase", "Stripe", "iOS/Android"],
      link: "#",
      github: "#"
    },
    {
      title: "클라우드 인프라",
      category: "클라우드",
      description: "AWS 기반 클라우드 인프라 구축으로 비용 40% 절감",
      image: "/api/placeholder/400/300",
      icon: Cloud,
      gradient: "from-green-500 to-emerald-500",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      link: "#",
      github: "#"
    },
    {
      title: "데이터 분석 대시보드",
      category: "데이터 분석",
      description: "실시간 비즈니스 인텔리전스 대시보드 구축",
      image: "/api/placeholder/400/300",
      icon: Database,
      gradient: "from-indigo-500 to-blue-500",
      tech: ["Python", "Tableau", "PostgreSQL", "Apache Kafka"],
      link: "#",
      github: "#"
    },
    {
      title: "보안 모니터링 시스템",
      category: "보안 서비스",
      description: "실시간 보안 위협 탐지 및 대응 시스템",
      image: "/api/placeholder/400/300",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      tech: ["ELK Stack", "Wireshark", "Snort", "Python"],
      link: "#",
      github: "#"
    },
    {
      title: "AI 챗봇 서비스",
      category: "AI/ML 서비스",
      description: "자연어 처리를 통한 고객 서비스 챗봇",
      image: "/api/placeholder/400/300",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      tech: ["TensorFlow", "NLP", "Python", "FastAPI"],
      link: "#",
      github: "#"
    }
  ]

  const stats = [
    { number: '500+', label: '완료된 프로젝트', icon: TrendingUp },
    { number: '98%', label: '고객 만족도', icon: Star },
    { number: '50+', label: '만족한 고객', icon: Users },
    { number: '10년+', label: '업계 경험', icon: Star }
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
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              성공적인 프로젝트들
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              포트폴리오
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              다양한 분야의 성공적인 프로젝트들을 확인해보세요
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 기술과 창의적인 솔루션으로 완성한 프로젝트들입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group relative ${index === 0 ? 'animate-fade-in-left' : index === 1 ? 'animate-fade-in-up' : index === 2 ? 'animate-fade-in-right' : index === 3 ? 'animate-fade-in-left' : index === 4 ? 'animate-fade-in-up' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <a href={project.github} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Github className="h-4 w-4 text-gray-600" />
                        </a>
                        <a href={project.link} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <ExternalLink className="h-4 w-4 text-gray-600" />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Project Button */}
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                      프로젝트 보기
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            프로젝트를 시작해보세요
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            성공적인 프로젝트 경험을 바탕으로 최고의 솔루션을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              프로젝트 문의하기
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              더 많은 프로젝트 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 