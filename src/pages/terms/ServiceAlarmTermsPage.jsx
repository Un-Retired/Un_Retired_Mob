const ServiceAlarmTermsPage = () => {
  return (
    <div className="pt-[20px] pb-[44px] px-[16px] flex flex-col gap-[16px]">
      <span className="text-[20px] font-bold leading-[1.5] tracking-[-0.6px]">
        서비스 수신 알림 동의
      </span>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-bold leading-[1.5] tracking-[-0.6px]">
          당사는 귀하에게 보다 나은 서비스를 제공하기 위해 마케팅 및 광고 목적의
          정보를 다음과 같이 제공하고자 합니다.
        </span>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">1.</span>수집하는 정보: 이메일 주소,
            휴대폰 번호
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">2.</span>수집 목적
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>할인 프로모션, 이벤트 및 신제품 출시 알림</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>서비스 개선 및 맞춤형 마케팅 자료 제공</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">3.</span>수신 채널
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>이메일</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>문자 메시지(SMS/MMS)</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>푸시 알림</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">4.</span>수신 동의 철회 방법
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>이메일 하단의 ‘수신 거부’ 링크 클릭</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>고객센터로 연락</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>설정 메뉴에서 알림 수신 설정 변경</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">5.</span>개인정보 보호
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>
              제공된 정보는 동의된 목적 이외의 용도로 사용되지 않으며, 당사는
              관련 법률에 따라 귀하의 개인 정보를 안전하게 보호합니다.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <span className="flex mx-[8px]">6.</span>동의 사항
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>이메일로 마케팅 정보 수신에 동의합니다.</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>SMS로 마케팅 정보 수신에 동의합니다.</div>
          </div>
          <div className="flex flex-row text-[14px] font-normal leading-[1.5] tracking-[-0.6px]">
            <div className="flex mx-[6px]">ㆍ</div>
            <div>푸시 알림으로 마케팅 정보 수신에 동의합니다.</div>
          </div>
        </div>
        <span className="text-[16px] font-bold leading-[1.5] tracking-[-0.6px]">
          본 동의는 자발적이며, 동의하지 않으셔도 서비스 이용에는 제한이
          없습니다.
        </span>
      </div>
    </div>
  );
};

export default ServiceAlarmTermsPage;
