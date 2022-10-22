import React from 'react'

function cookie_bar() {
  return (
    <>
    <section className="ch2" data-nosnippet="true" style={{}}>
  <div className="ch2-container ch2-theme-bar ch2-style-light ch2-ea">
    <div
      className="ch2-dialog ch2-dialog-bottom ch2-visible"
      role="dialog"
      aria-labelledby="ch2-dialog-title"
      aria-describedby="ch2-dialog-description"
    >
      <div className="ch2-dialog-content ">
        <p id="ch2-dialog-title">
          <strong>เกี่ยวกับคุกกี้บนเว็บไซต์นี้</strong>
        </p>
        <p id="ch2-dialog-description" />
        <div className="labelconsent">
          เราใช้คุกกี้เพื่อเก็บรวบรวม และวิเคราะห์ข้อมูลเกี่ยวกับประสิทธิภาพ
          และการใช้งานของเว็บไซต์{" "}
          <span
            onclick="popupcookieconsent()"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            id="creadmore"
          >
            อ่านเพิ่มเติม
          </span>
        </div>
        <p />
      </div>
      <div className="ch2-dialog-actions ">
        <button className="ch2-btn ch2-open-settings-btn ch2-btn-secondary">
          การตั้งค่าคุกกี้
        </button>
        <button className="ch2-btn ch2-allow-all-btn ch2-btn-primary">
          ยอมรับทั้งหมด
        </button>
      </div>
    </div>
    <div
      className="ch2-settings ch2-settings-scan"
      role="dialog"
      aria-labelledby="ch2-settings-title"
      aria-describedby="ch2-settings-description"
    >
      <div className="ch2-settings-header">
        <a href="#" className="ch2-close-settings-btn" aria-label="ปิด" />
        <p id="ch2-settings-title" tabIndex={0}>
          <strong>เกี่ยวกับคุกกี้บนเว็บไซต์นี้</strong>
        </p>
      </div>
      <div className="ch2-settings-tabs">
        <ul role="tablist">
          <li className="active" aria-selected="true" role="tab">
            <a href="#ch2-settings" className="ch2-select-tab" role="button">
              การตั้งค่าคุกกี้
            </a>
          </li>
        </ul>
      </div>
      <div className="ch2-settings-content">
        <div className="ch2-settings-tab-container" id="ch2-settings">
          <p id="ch2-settings-description">
            คุกกี้ที่ใช้งานบนเว็บไซต์นี้ได้รับการจัดหมวดหมู่ซึ่งคุณสามารถอ่านเกี่ยวกับหมวดหมู่
            การอนุญาต และการปฏิเสธบางส่วน หรือทั้งหมดได้ที่ด้านล่าง
            เมื่อปิดใช้งานหมวดหมู่ที่ได้อนุญาตไปแล้วก่อนหน้านี้
            คุกกี้ทั้งหมดที่อยู่ในหมวดหมู่นั้นจะถูกลบออกไปจากเบราว์เซอร์ของคุณ
            นอกจากนี้ คุณยังสามารถดูรายการของคุกกี้ที่ถูกกำหนดไว้ในแต่ละหมวดหมู่
            และข้อมูลอย่างละเอียดในการรับรองคุกกี้
          </p>
          <button className="ch2-btn ch2-btn-secondary ch2-allow-all-btn">
            ยอมรับทั้งหมด
          </button>
          <button className="ch2-btn ch2-btn-secondary ch2-deny-all-btn">
            ปฏิเสธทั้งหมด
          </button>
          <div className="ch2-settings-options">
            <div className="ch2-settings-option">
              <div className="ch2-switch">
                <input
                  type="checkbox"
                  className="ch2-switch-value"
                  name="necessary"
                  aria-labelledby="ch2-0-title"
                  id="c2-0"
                  defaultChecked=""
                  disabled=""
                />
                <label htmlFor="c2-0" aria-hidden="true" tabIndex={-1}>
                  
                </label>
              </div>
              <div className="ch2-settings-option-details">
                <p id="ch2-0-title">
                  <strong>คุกกี้ประเภทจำเป็นถาวรคุกกี้ (Cookies)</strong>
                </p>
                <p>
                  คุกกี้ประเภทนี้จำเป็นต้องมี
                  เพื่อให้เว็บไซต์สามารถปฏิบัติการได้อย่างเหมาะสม และเป็นปกติ
                  รวมถึงใช้เพื่อระบุและป้องกันความเสี่ยงด้านความปลอดภัย
                  และป้องกันไม่ให้ท่านถูกตัดการเชื่อมต่อจากเว็บไซต์อย่างไม่ทันคาดคิด
                </p>
              </div>
            </div>
            <div className="ch2-settings-option">
              <div className="ch2-switch">
                <input
                  type="checkbox"
                  className="ch2-switch-value"
                  name="analytics"
                  aria-labelledby="ch2-1-title"
                  id="c2-1"
                  defaultChecked=""
                />
                <label htmlFor="c2-1" aria-hidden="true" tabIndex={-1}>
                  
                </label>
              </div>
              <div className="ch2-settings-option-details">
                <p id="ch2-1-title">
                  <strong>คุกกี้เพื่อการวิเคราะห์และวัดผลการทำงาน</strong>
                </p>
                <p>
                  คุกกี้ประเภทนี้จะช่วยเก็บข้อมูลทำให้บริษัทได้รับทราบว่า
                  ลักษณะการปฏิบัติงาน/กิจลักษณ์ (features)
                  ใดในเว็บไซต์ที่ปฏิบัติงานได้ดีที่สุด หรือที่ควรต้องปรับปรุง
                  เพื่อให้เว็บไซต์ทำงานได้ดียิ่งขึ้น
                </p>
              </div>
            </div>
            <div className="ch2-settings-option">
              <div className="ch2-switch">
                <input
                  type="checkbox"
                  className="ch2-switch-value"
                  name="marketing"
                  aria-labelledby="ch2-2-title"
                  id="c2-2"
                  defaultChecked=""
                />
                <label htmlFor="c2-2" aria-hidden="true" tabIndex={-1}>
                  
                </label>
              </div>
              <div className="ch2-settings-option-details">
                <p id="ch2-2-title">
                  <strong>คุกกี้เพื่อการโฆษณา</strong>
                </p>
                <p>
                  คุกกี้ประเภทนี้จะถูกบันทึกลงในบราวเซอร์ของท่านโดยเซิร์ฟเวอร์โฆษณา
                  (ad servers)
                  เพื่อเข้าใจความต้องการของผู้ใช้งานโดยมีวัตถุประสงค์ในการปรับเเต่งเว็บไซต์
                  แคมเปญ โฆษณาให้เหมาะสมกับความสนใจของท่าน
                </p>
              </div>
            </div>
            <div className="ch2-settings-option">
              <div className="ch2-switch">
                <input
                  type="checkbox"
                  className="ch2-switch-value"
                  name="uncategorized"
                  aria-labelledby="ch2-3-title"
                  id="c2-3"
                  defaultChecked=""
                />
                <label htmlFor="c2-3" aria-hidden="true" tabIndex={-1}>
                  
                </label>
              </div>
              <div className="ch2-settings-option-details">
                <p id="ch2-3-title">
                  <strong>
                    คุกกี้ประเภทการทำงานจดจำการปรับตั้งค่าเฉพาะตัวของผู้ใช้บริการ
                  </strong>
                </p>
                <p>
                  คุกกี้ประเภทนี้ถูกใช้เพื่อให้เว็บไซต์สามารถจดจำผู้ที่เคยเข้าเยื่ยมชม/ใช้บริการ
                  บนเว็บไซต์และกำหนดการตั้งค่าของผู้ที่เคยเข้าเยี่ยมชม/ใช้บริการบนเว็บไซต์นั้นกลับเข้ามาเยี่ยมชมเว็บไซต์อีกครั้งจะได้ไม่ต้องตั้งค่าต่างๆใหม่อีกครั้ง
                </p>
              </div>
            </div>
          </div>
          <p>
            <a
              href="https://www.cookiehub.com"
              tabIndex={-1}
              rel="noopener"
              target="_blank"
            >
              Cookie consent by CookieHub
            </a>
          </p>
        </div>
      </div>
      <div className="ch2-settings-actions">
        <p>
          <a
            href="https://www.cookiehub.com"
            tabIndex={-1}
            rel="noopener"
            target="_blank"
          >
            Cookie consent by CookieHub
          </a>
        </p>
        <button className="ch2-btn ch2-btn-primary ch2-save-settings-btn">
          บันทึกการตั้งค่า
        </button>
      </div>
    </div>
  </div>
</section>

    </>
    )
}

export default cookie_bar