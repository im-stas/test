// File: components/Sidebar.tsx
import React from 'react';

// Since the original images are on localhost, I'll replace them with placeholder icons
// In a real project, you'd replace these with your actual icon components or SVGs

interface SwitcherProps {
  states?: "Switched" | "Switched Disabled" | "Unswitch" | "Unswitch Disabled";
}

function Switcher({ states = "Unswitch" }: SwitcherProps) {
  if (states === "Switched") {
    return (
      <div className="box-border content-stretch flex items-start justify-start p-[2px] relative w-10 h-6">
        <div className="h-5 relative shrink-0 w-9 bg-blue-500 rounded-full">
          <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5 transition-all duration-200"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="box-border content-stretch flex items-start justify-start p-[2px] relative w-10 h-6">
      <div className="h-5 relative shrink-0 w-9 bg-gray-400 rounded-full">
        <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-0.5 transition-all duration-200"></div>
      </div>
    </div>
  );
}

// Icon components (replace these with your actual icons)
const DashboardIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const KeyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 16.5V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-.5L6.257 15.257a6 6 0 017.486-7.486L15 9v2a2 2 0 002-2z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

export default function Sidebar() {
  return (
    <div className="bg-[#202427] relative w-80 h-screen border-r border-[#292e32]">
      <div className="flex flex-col gap-12 p-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2.5">
            {/* Dashboard - Active */}
            <div className="h-[52px] w-[262px]">
              <div className="bg-[#066de6] h-[52px] rounded-[10px] flex items-center gap-3.5 px-3.5">
                <DashboardIcon />
                <span className="font-['Montserrat',sans-serif] font-semibold text-[18px] text-white">
                  Dashboard
                </span>
              </div>
            </div>

            {/* Schedule */}
            <div className="h-[52px] w-[262px] flex items-center gap-3 px-3.5">
              <CalendarIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Schedule
              </span>
            </div>

            {/* Clients */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <UsersIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Clients
              </span>
            </div>

            {/* Progress Report */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <TrendingUpIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Progress Report
              </span>
            </div>

            {/* Telerecovery Services */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <EyeIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Telerecovery Services
              </span>
            </div>

            {/* LMS */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <ClipboardIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                LMS
              </span>
            </div>

            {/* Referrals */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <ExternalLinkIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Referrals
              </span>
            </div>

            {/* Documents */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <DocumentIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Documents
              </span>
            </div>

            {/* Message */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <MessageIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Message
              </span>
            </div>

            {/* Settings */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <SettingsIcon />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-[#a7aec1]">
                Settings
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-2.5">
            {/* Dark Mode with Toggle */}
            <div className="h-[52px] w-[262px] flex items-center justify-between px-3.5">
              <div className="flex items-center gap-3.5">
                <MoonIcon />
                <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                  Dark Mode
                </span>
              </div>
              <Switcher states="Switched" />
            </div>

            {/* Authentication */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <KeyIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Authentication
              </span>
            </div>

            {/* Logout */}
            <div className="h-[52px] w-[262px] flex items-center gap-3.5 px-3.5">
              <LogoutIcon />
              <span className="font-['Montserrat',sans-serif] font-normal text-[18px] text-[#a7aec1]">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}