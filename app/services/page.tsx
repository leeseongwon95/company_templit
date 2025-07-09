'use client'

import { Code, Smartphone, Cloud, Database, Shield, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = [100, 50, 5, 24]
    const duration = 2000 // 2초
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      
      const newCounts = targets.map(target => {
        const progress = currentStep / steps
        return Math.floor(target * progress)
      })

      setCounts(newCounts)

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const services = [
    {
      icon: Code,
      title: '웹 개발',
      description: '현대적이고 반응형 웹사이트 및 웹 애플리케이션 개발',
      features: ['React/Next.js', 'Node.js/Express', 'TypeScript', 'SEO 최적화'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: '모바일 앱',
      description: 'iOS 및 Android 플랫폼을 위한 네이티브 모바일 애플리케이션',
      features: ['React Native', 'Flutter', 'iOS/Android', '앱스토어 등록'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: '클라우드 솔루션',
      description: 'AWS, Azure, GCP를 활용한 클라우드 인프라 구축 및 관리',
      features: ['AWS/Azure/GCP', 'DevOps', '컨테이너화', '모니터링'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Database,
      title: '데이터 분석',
      description: '빅데이터 처리 및 비즈니스 인텔리전스 솔루션',
      features: ['데이터 웨어하우스', 'ETL 파이프라인', '시각화', '예측 분석'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: '보안 서비스',
      description: '종합적인 사이버 보안 및 데이터 보호 솔루션',
      features: ['보안 감사', '침입 탐지', '암호화', '규정 준수'],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'AI/ML 서비스',
      description: '인공지능 및 머신러닝 기반 비즈니스 솔루션',
      features: ['예측 모델링', '자연어 처리', '컴퓨터 비전', '자동화'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  const stats = [
    { label: '완료된 프로젝트', suffix: '+' },
    { label: '만족한 고객', suffix: '+' },
    { label: '년간 경험', suffix: '+' },
    { label: '지원 서비스', suffix: '/7' }
  ]

  const processes = [
    { step: '1', title: '기획 & 분석', desc: '요구사항 분석 및 프로젝트 기획', icon: '📋' },
    { step: '2', title: '디자인', desc: 'UX/UI 디자인 및 프로토타입 제작', icon: '🎨' },
    { step: '3', title: '개발', desc: '실제 개발 및 구현', icon: '💻' },
    { step: '4', title: '테스트 & 배포', desc: '품질 검증 및 실제 서비스 배포', icon: '🚀' }
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
              전문적인 개발 서비스
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              서비스
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              다양한 분야의 전문 서비스를 통해 고객의 비즈니스 성장을 지원합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                프로젝트 시작하기
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                포트폴리오 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              제공 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 기술과 창의적인 솔루션으로 비즈니스의 디지털 전환을 지원합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group relative ${index === 0 ? 'animate-fade-in-left' : index === 1 ? 'animate-fade-in-up' : index === 2 ? 'animate-fade-in-right' : index === 3 ? 'animate-fade-in-left' : index === 4 ? 'animate-fade-in-up' : 'animate-fade-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg">
                    자세히 보기
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              개발 프로세스
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              체계적인 프로세스로 최고 품질의 결과물을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-2xl">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent transform translate-x-4"></div>
                  )}
                </div>
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {process.desc}
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
            프로젝트를 시작해보세요
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            최고의 품질과 혁신적인 솔루션으로 비즈니스의 성장을 도와드리겠습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              무료 상담 신청
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              견적 문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 