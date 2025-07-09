'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Star } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData)
    alert('문의가 성공적으로 전송되었습니다!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2 text-yellow-300" />
              언제든 연락주세요
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              문의하기
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              프로젝트 문의나 상담이 필요하시면 언제든 연락주세요
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Send className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">메시지 보내기</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="회사명을 입력하세요"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 제목 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-gray-300"
                  >
                    <option value="">선택해주세요</option>
                    <option value="웹 개발">웹 개발</option>
                    <option value="모바일 앱">모바일 앱</option>
                    <option value="클라우드 솔루션">클라우드 솔루션</option>
                    <option value="데이터 분석">데이터 분석</option>
                    <option value="보안 서비스">보안 서비스</option>
                    <option value="AI/ML 서비스">AI/ML 서비스</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="프로젝트에 대한 자세한 내용을 알려주세요..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  메시지 보내기
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-right">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">연락처 정보</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">주소</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      서울특별시 강남구 테헤란로 123<br />
                      TechCorp 빌딩 8층
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">전화번호</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      02-1234-5678<br />
                      평일 09:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">이메일</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      info@techcorp.com<br />
                      support@techcorp.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">업무 시간</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">월요일 - 금요일</span>
                    <span className="text-primary-600 font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">토요일</span>
                    <span className="text-primary-600 font-semibold">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">일요일</span>
                    <span className="text-red-500 font-semibold">휴무</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-2xl border border-primary-100">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">빠른 응답</h4>
                    <p className="text-sm text-gray-600">평균 2시간 내 답변</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              오시는 길
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              편리한 위치에서 만나뵙겠습니다
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-up">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">지도가 여기에 표시됩니다</p>
                <p className="text-sm">Google Maps 또는 카카오맵 API 연동</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 