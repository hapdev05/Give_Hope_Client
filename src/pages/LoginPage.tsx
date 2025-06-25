"use client";

import { useState } from "react";
import { Heart, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex bg-[#fefefe]">
      {/* Left Side - Illustration */}
      <div className="flex-1 bg-gradient-to-br from-[#3498db] via-[#5dade2] to-[#85c1e9] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#f9e79f] rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-[#fefefe] rounded-full blur-lg opacity-20"></div>

        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f9e79f] rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          </div>
          <span className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
            Thiennguyen
          </span>
        </div>

        {/* Floating Dollar Signs */}
        <div className="absolute top-32 left-16 w-14 h-14 bg-[#f9e79f] rounded-full flex items-center justify-center opacity-90 shadow-lg animate-float">
          <span className="text-[#d4ac0d] font-bold text-lg">$</span>
        </div>
        <div className="absolute top-48 right-24 w-10 h-10 bg-[#f9e79f] rounded-full flex items-center justify-center opacity-90 shadow-md animate-float-delay-1">
          <span className="text-[#d4ac0d] font-bold">$</span>
        </div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#f9e79f] rounded-full flex items-center justify-center opacity-90 shadow-lg animate-float-delay-2">
          <span className="text-[#d4ac0d] font-bold text-lg">$</span>
        </div>

        {/* Central Illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Hands */}
            <div className="relative">
              <div className="w-36 h-24 bg-[#aed6f1] rounded-t-full opacity-80 transform rotate-12 shadow-xl"></div>
              <div className="w-36 h-24 bg-[#d5dbdb] rounded-t-full opacity-80 transform -rotate-12 absolute top-0 left-8 shadow-xl"></div>
            </div>

            {/* Jar */}
            <div className="relative -mt-10 mx-auto">
              <div className="w-28 h-36 bg-[#fefefe]/25 rounded-2xl border-4 border-[#fefefe]/40 relative backdrop-blur-sm shadow-2xl">
                {/* Heart in jar */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <Heart className="w-10 h-10 text-red-500 fill-red-500 drop-shadow-lg" />
                    <div className="absolute inset-0 w-10 h-10 bg-red-400 rounded-full blur-md opacity-50 animate-pulse"></div>
                  </div>
                </div>

                {/* Jar lid */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#f9e79f] rounded-full shadow-lg border-2 border-[#fefefe]/60"></div>
              </div>
            </div>

            {/* Enhanced Floating Coins */}
            <div className="absolute -top-20 left-8 w-10 h-10 bg-[#f9e79f] rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <span className="text-[#d4ac0d] font-bold text-sm">$</span>
            </div>
            <div className="absolute -top-16 right-4 w-8 h-8 bg-[#f9e79f] rounded-full flex items-center justify-center animate-bounce delay-100 shadow-md">
              <span className="text-[#d4ac0d] font-bold text-xs">$</span>
            </div>
            <div className="absolute -top-24 left-16 w-9 h-9 bg-[#f9e79f] rounded-full flex items-center justify-center animate-bounce delay-200 shadow-lg">
              <span className="text-[#d4ac0d] font-bold text-sm">$</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-[#fefefe] flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#3498db] mb-2">
              Đăng nhập
            </h1>
            <p className="text-gray-600 text-sm">Chào mừng bạn trở lại</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Nhập địa chỉ email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-[#fefefe] focus:outline-none focus:ring-2 focus:ring-[#3498db]/20 focus:border-[#3498db] transition-all duration-200 shadow-sm hover:shadow-md"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Mật khẩu
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl bg-[#fefefe] focus:outline-none focus:ring-2 focus:ring-[#3498db]/20 focus:border-[#3498db] transition-all duration-200 shadow-sm hover:shadow-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-50 rounded-r-xl transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-[#3498db] hover:text-[#2980b9] font-medium transition-colors"
              >
                Quên mật khẩu?
              </a>
            </div>

            <Button className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] border-0">
              Đăng nhập
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Bạn chưa có tài khoản?{" "}
              <a
                href="#"
                className="text-[#3498db] hover:text-[#2980b9] font-semibold transition-colors"
              >
                Đăng ký ngay
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#fefefe] text-gray-500">
                  hoặc tiếp tục với
                </span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                <span className="text-white font-bold text-lg">f</span>
              </button>
              <button className="w-12 h-12 bg-[#fefefe] hover:bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                <span className="text-red-500 font-bold text-lg">G</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Bằng việc tiếp tục, bạn đã đồng ý với{" "}
              <a
                href="#"
                className="text-[#3498db] hover:text-[#2980b9] transition-colors"
              >
                Điều khoản sử dụng
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
