const PrivacyTermsPage = () => {
  return (
    <div className="pt-[20px] pb-[44px] px-[16px] flex flex-col gap-[16px]">
      <span className="text-[20px] font-bold leading-[1.5] tracking-[-0.6px]">
        개인정보 수집 및 이용 동의
      </span>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-bold leading-[1.5] tracking-[-0.6px]">
          개인정보의 수집 및 이용 목적
        </span>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">1.</span>회원 가입 및 관리
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              회원제 서비스 이용에 따른 본인 식별, 회원자격 유지ㆍ관리, 서비스
              부정이용 방지와 비인가 사용방지, 각종 고지ㆍ통지, 불만처리 및
              고객상담 등 민원 처리, 분쟁 조정을 위한 기록보존
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">2.</span>재화 또는 서비스 제공
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산,
              콘텐츠 제공, 구매 및 요금 결제, 환불, 물품배송, 본인인증, 요금추심
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">3.</span>서비스 개선 및 마케팅 활용
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              신규 서비스(제품) 개발 및 특화, 이벤트 등 홍보성 정보 전달
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              인구통계학적 특성에 따른 서비스 제공 및 이용자의 관심, 성향에
              기반한 개인 맞춤형 상품추천서비스(광고포함) 제공, 접속 빈도 파악,
              회원의 서비스 이용에 대한 통계 분석
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-bold leading-[1.5] tracking-[-0.6px]">
          수집하는 개인정보의 항목
        </span>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">1.</span>회원 가입 시 아래와 같은
            정보가 수집됩니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              이메일 계정 이용 시: [필수] 이름, 이메일 주소, 휴대폰 번호,
              비밀번호
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              카카오 계정 이용 시: [필수] 프로필 정보(닉네임/프로필 사진),
              카카오계정(이메일, 전화번호) [선택] 성별, 연령대, 생일, 출생 연도
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              네이버 계정 이용 시: [필수] 이름, 이메일 주소, 휴대전화번호 [선택]
              성별, 생일, 연령대, 출생연도
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>페이스북 계정 이용 시: [필수] 이메일 주소</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              구글 계정 이용 시: [필수] 프로필 사진, 이메일 주소, 전화번호
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>애플 계정 이용 시: [필수] 이름, 이메일 주소</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">2.</span>서비스 이용과정에서 아래와
            같은 정보들이 수집될 수 있습니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              서비스 이용 기록, 접속로그, IP정보, 불량 이용 기록, 국가,
              기기정보(모델명, OS정보, MAC정보, 언어 및 국가정보, 기기 고유
              식별번호, 광고식별자)
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">3.</span>연령 확인 및 본인인증이
            필요한 서비스 제공 시 아래와 같은 정보들이 수집될 수 있습니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              휴대폰 본인 인증 시: 이름, 생년월일, 성별, 중복가입확인정보(DI),
              연계정보(CI), 내·외국인정보
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">4.</span>고객센터 문의 시 아래와
            같은 정보가 수집될 수 있습니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>이메일 주소</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>휴대폰 번호</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">5.</span>유료 결제 시 아래와 같은
            정보가 수집될 수 있습니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              결제 수단(신용카드, 무통장 입금, 평생교육바우처 및 기타 결제
              수단)에 따라 필요한 정보는 PG사에서 수집하고 있습니다.
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>환불 시: 이름, 연락처, 은행명, 예금주, 계좌번호</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">6.</span>이벤트 경품 등의 지급 시
            아래와 같은 정보가 수집될 수 있습니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>배송 상품: 이름, 주소, 전화번호</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>모바일 상품: 이름, 휴대폰 번호</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              경품에 대한 제세공과금 처리 시: 신분증 사본 앞면(소득세법상
              기타소득 신고 처리 목적)
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">7.</span>아래의 서비스 이용 시 추가
            정보를 수집할 수 있으며, 이 경우 별도의 개인정보 수집 및 이용 동의를
            받을 수 있습니다.
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>마이페이지 내 추가 정보 입력 시: 닉네임, 프로필 사진</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              학생 할인 플랜 가입 시: 학교 이름, 학교 이메일 주소, 졸업연월
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              크리에이터 계약 체결 시: 이름, 성별, 생년월, 최종학력, 국적, 주소,
              휴대폰 번호, 이메일 주소, 주민등록번호, 은행명, 예금주, 계좌번호,
              SNS 계정 및 URL
            </div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              이벤트 참가 시: 별도의 개인정보 수집 및 이용 동의를 받은 후 수집
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-bold leading-[1.5] tracking-[-0.6px]">
          개인정보의 보유 및 이용 기간
        </span>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체없이 파기합니다. 다만, 관계법령의 규정에 의하여 보존할
            필요가 있는 경우, 회사는 아래와 같이 관계법령에서 정한 일정한 기간
            동안 회원정보를 보관하며, 이 경우 회사는 해당 개인정보를 분리하여
            보관합니다.
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">1.</span>계약 또는 청약철회 등에
            관한 기록: 5년(전자상거래 등에서의 소비자보호에 관한 법률)
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">2.</span>대금결제 및 재화 등의
            공급에 관한 기록: 5년(전자상거래 등에서의 소비자보호에 관한 법률)
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">3.</span>소비자의 불만 또는
            분쟁처리에 관한 기록: 3년(전자상거래 등에서의 소비자보호에 관한
            법률)
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">4.</span>표시/광고에 관한 기록:
            6개월(전자상거래 등에서의 소비자보호에 관한 법률)
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">5.</span>웹사이트 방문에 관한 기록:
            3개월(통신비밀보호법)
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">6.</span>부가가치세의 과세표준과
            세액의 신고에 관한 기록: 5년(부가가치세법)
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            이용자는 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만
            개인정보 수집 및 이용 동의를 거부하실 경우 회원가입이 제한됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTermsPage;
