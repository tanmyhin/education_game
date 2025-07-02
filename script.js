document.addEventListener('DOMContentLoaded', () => {

    // --- ส่วนข้อมูลของเกม (Game Data) ---
    const scenarios = [
        {
            week: "สัปดาห์ที่ 1: การเริ่มต้น",
            scenario: "ทีมของคุณได้รับมอบหมายให้ทำ 'โครงงานแอปฯ ลดขยะพลาสติก' ทุกคนดูสับสนและไม่รู้จะเริ่มตรงไหน ในฐานะหัวหน้าโครงการ คุณจะทำอย่างไร?",
            choices: [
                { text: "สั่งให้โปรแกรมเมอร์เริ่มเขียนโค้ดทันที จะได้มีอะไรให้เห็นเป็นชิ้นเป็นอัน", isCorrect: false, feedback: "การเริ่มทำทันทีโดยไม่มีแผนอาจทำให้หลงทางและเสียเวลา ควรวางแผนก่อนเสมอ", principle: "หลักการที่พลาดไป: Algorithm & Decomposition", progressChange: -10, moraleChange: -15 },
                { text: "แบ่งงานใหญ่เป็นส่วนย่อย: 1.วิจัยปัญหา 2.ออกแบบ 3.พัฒนา 4.ทดสอบ และมอบหมายงานให้ชัดเจน", isCorrect: true, feedback: "ยอดเยี่ยม! การแบ่งโครงงานใหญ่เป็นส่วนย่อยๆ ทำให้ทีมทำงานง่ายและมีทิศทางที่ชัดเจน", principle: "หลักการที่ใช้: Decomposition (การแยกย่อย)", progressChange: 20, moraleChange: 15 },
                { text: "เรียกประชุมทุกคนเพื่อระดมสมองเกี่ยวกับ 'สีของโลโก้แอป'", isCorrect: false, feedback: "โลโก้เป็นสิ่งสำคัญ แต่ไม่ใช่สิ่งแรกที่ต้องทำ! ควรรكزที่แก่นของปัญหาก่อน", principle: "หลักการที่พลาดไป: Abstraction (แนวคิดเชิงนามธรรม)", progressChange: -5, moraleChange: -10 }
            ]
        },
        {
            week: "สัปดาห์ที่ 3: การออกแบบ",
            scenario: "ทีมกำลังออกแบบฟีเจอร์จูงใจให้คนมาใช้แอป แต่ยังไม่มีไอเดียดีๆ คุณจะทำอย่างไร?",
            choices: [
                { text: "ไปศึกษาแอปฯ อื่นที่ประสบความสำเร็จ (เช่น แอปสะสมแต้ม) เพื่อวิเคราะห์ 'รูปแบบ' ที่ทำให้คนชอบใช้", isCorrect: true, feedback: "ดีมาก! การเรียนรู้จากรูปแบบความสำเร็จช่วยให้เราไม่ต้องเริ่มจากศูนย์และลดความเสี่ยง", principle: "หลักการที่ใช้: Pattern Recognition (การรู้จำรูปแบบ)", progressChange: 20, moraleChange: 10 },
                { text: "คิดฟีเจอร์ที่ซับซ้อนและไม่เคยมีใครทำมาก่อน เพื่อให้ดูโดดเด่น", isCorrect: false, feedback: "ความคิดสร้างสรรค์เป็นสิ่งที่ดี แต่การทำสิ่งที่ซับซ้อนเกินไปโดยไม่มีต้นแบบ อาจเสี่ยงและไม่เสร็จตามเวลา", principle: "หลักการที่พลาดไป: Pattern Recognition", progressChange: -10, moraleChange: -5 },
                { text: "ให้ทีมทำแบบสำรวจถามเพื่อนๆ ว่าอยากได้อะไร โดยไม่มีตัวอย่างชี้นำ", isCorrect: false, feedback: "เป็นวิธีที่ดี แต่การไม่มีกรอบอาจทำให้ได้ข้อมูลที่กระจัดกระจาย ควรหาข้อมูลจากรูปแบบที่เคยสำเร็จควบคู่ไปด้วย", principle: "หลักการที่พลาดไป: Pattern Recognition", progressChange: 0, moraleChange: 5 }
            ]
        },
        {
            week: "สัปดาห์ที่ 5: ปัญหาที่ไม่คาดคิด",
            scenario: "โปรแกรมเมอร์บอกว่าฟีเจอร์ 'AI วิเคราะห์ชนิดพลาสติกจากภาพถ่าย' มันซับซ้อนมาก และอาจต้องใช้เวลาอีก 2 เดือน คุณจะทำอย่างไร?",
            choices: [
                { text: "กลับมาทบทวน 'เป้าหมายหลัก' และตัดฟีเจอร์ AI ออกไปก่อน แล้วใช้ระบบ 'บันทึกด้วยตนเอง' ที่ง่ายกว่าแทน", isCorrect: true, feedback: "เป็นการตัดสินใจที่เฉียบแหลม! การโฟกัสที่เป้าหมายหลัก (ลดขยะ) และละเว้นรายละเอียดที่ซับซ้อนเกินไป คือหัวใจสำคัญ", principle: "หลักการที่ใช้: Abstraction (แนวคิดเชิงนามธรรม)", progressChange: 15, moraleChange: 10 },
                { text: "ยืนยันให้ทำฟีเจอร์ AI ให้ได้ เพราะมันเจ๋งที่สุด แม้ว่าโครงการจะเสร็จไม่ทันก็ตาม", isCorrect: false, feedback: "การยึดติดกับฟีเจอร์ที่ไม่จำเป็น อาจทำให้โครงการโดยรวมล้มเหลวได้", principle: "หลักการที่พลาดไป: Abstraction", progressChange: -20, moraleChange: -20 },
                { text: "ตำหนิโปรแกรมเมอร์ว่าไม่มีความสามารถ และหาคนใหม่มาทำแทน", isCorrect: false, feedback: "การสร้างบรรยากาศที่ไม่ดีในทีมจะส่งผลเสียต่อขวัญกำลังใจและทำให้โครงการแย่ลง", principle: "หลักการที่พลาดไป: Teamwork", progressChange: -15, moraleChange: -30 }
            ]
        },
         {
            week: "สัปดาห์ที่ 6: การวางแผนงาน",
            scenario: "ทีมพัฒนาแอปฯ รุ่นทดสอบ (Prototype) เสร็จแล้ว ขั้นตอนต่อไปคืออะไร?",
            choices: [
                { text: "เปิดให้ทุกคนในโรงเรียนเข้ามาทดลองใช้พร้อมกันเลย", isCorrect: false, feedback: "เสี่ยงเกินไป! หากมีข้อผิดพลาดร้ายแรง อาจสร้างความประทับใจที่ไม่ดีและแก้ไขได้ยาก ควรทดสอบในกลุ่มเล็กก่อน", principle: "หลักการที่พลาดไป: Algorithm", progressChange: -15, moraleChange: -10 },
                { text: "สร้าง 'ลำดับขั้นตอน' การทดสอบ: 1.ทดสอบกับกลุ่มเล็ก 2.รวบรวมข้อเสนอแนะ 3.แก้ไข 4.ขยายผล", isCorrect: true, feedback: "สมบูรณ์แบบ! การสร้างขั้นตอนการทำงานที่ชัดเจนและเป็นระบบ ช่วยให้งานราบรื่นและมีประสิทธิภาพ", principle: "หลักการที่ใช้: Algorithm (ขั้นตอนวิธี)", progressChange: 20, moraleChange: 15 },
                { text: "เอาแอปไปนำเสนออาจารย์เลย โดยยังไม่ได้ทดสอบกับผู้ใช้จริง", isCorrect: false, feedback: "อาจารย์อาจจะถามคำถามที่เราตอบไม่ได้ เพราะเรายังไม่เคยเห็นผลตอบรับจากผู้ใช้จริง ควรมีข้อมูลก่อนนำเสนอ", principle: "หลักการที่พลาดไป: Algorithm", progressChange: -10, moraleChange: -5 }
            ]
        }
    ];

    // --- ส่วนตัวแปรของเกม (Game State) ---
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtaeoO-9NN0jMLY6jnOmM8tUXSSREu89BbMLC3eCvHtQeie5uCNH9ujW-qMtFdL-A/exec";
    let currentScenarioIndex = 0;
    let progress = 0;
    let morale = 50;
    let playerName = "ผู้เล่นนิรนาม";

    // --- ส่วนอ้างอิงถึง Element ใน HTML (DOM Elements) ---
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const moraleBar = document.getElementById('morale-bar');
    const moraleText = document.getElementById('morale-text');
    const scenarioWeekEl = document.getElementById('scenario-week');
    const scenarioTextEl = document.getElementById('scenario-text');
    const choicesContainerEl = document.getElementById('choices-container');
    const feedbackContainerEl = document.getElementById('feedback-container');
    const feedbackTitleEl = document.getElementById('feedback-title');
    const feedbackTextEl = document.getElementById('feedback-text');
    const feedbackPrincipleEl = document.getElementById('feedback-principle');
    const nextButton = document.getElementById('next-button');
    const scenarioContainerEl = document.getElementById('scenario-container');
    const gameOverContainerEl = document.getElementById('game-over-container');
    const gameOverTitleEl = document.getElementById('game-over-title');
    const gameOverSummaryEl = document.getElementById('game-over-summary');
    const restartButton = document.getElementById('restart-button');
    const startContainerEl = document.getElementById('start-container');
    const startGameButton = document.getElementById('start-game-button');
    const playerNameInput = document.getElementById('player-name-input');
    

    // --- ส่วนฟังก์ชันการทำงานของเกม (Game Functions) ---
    
    function initGame() {
        currentScenarioIndex = 0;
        progress = 0;
        morale = 50;
        
        startContainerEl.classList.remove('hidden');
        scenarioContainerEl.classList.add('hidden');
        feedbackContainerEl.classList.add('hidden');
        gameOverContainerEl.classList.add('hidden');
        
        updateStatusBars();
    }
    
    function startGame() {
        playerName = playerNameInput.value.trim() || "ผู้เล่นนิรนาม";
        startContainerEl.classList.add('hidden');
        scenarioContainerEl.classList.remove('hidden');
        showScenario(currentScenarioIndex);
    }


    function showScenario(index) {
        const scenario = scenarios[index];
        scenarioWeekEl.textContent = scenario.week;
        scenarioTextEl.textContent = scenario.scenario;
        choicesContainerEl.innerHTML = '';

        scenario.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => selectChoice(choice);
            choicesContainerEl.appendChild(button);
        });
    }

    function selectChoice(choice) {
        progress += choice.progressChange;
        morale += choice.moraleChange;

        progress = Math.max(0, Math.min(100, progress));
        morale = Math.max(0, Math.min(100, morale));

        updateStatusBars();
        showFeedback(choice);
    }

    function showFeedback(choice) {
        scenarioContainerEl.classList.add('hidden');
        feedbackContainerEl.classList.remove('hidden');
        
        feedbackTextEl.textContent = choice.feedback;
        feedbackPrincipleEl.textContent = choice.principle;

        if (choice.isCorrect) {
            feedbackTitleEl.textContent = "ถูกต้อง!";
            feedbackTitleEl.className = 'correct';
        } else {
            feedbackTitleEl.textContent = "ลองใหม่นะ!";
            feedbackTitleEl.className = 'incorrect';
        }
    }

    function nextScenario() {
        feedbackContainerEl.classList.add('hidden');
        currentScenarioIndex++;

        if (currentScenarioIndex < scenarios.length) {
            scenarioContainerEl.classList.remove('hidden');
            showScenario(currentScenarioIndex);
        } else {
            endGame();
        }
    }

    function updateStatusBars() {
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
        moraleBar.style.width = `${morale}%`;
        moraleText.textContent = `${morale}%`;
    }

    async function submitScore(name, progress, morale, score) {
        const payload = { 
            PlayerName: name, 
            FinalProgress: progress, 
            FinalMorale: morale, 
            FinalScore: score
        };
        
        gameOverSummaryEl.innerHTML += "<p><em>กำลังบันทึกคะแนน...</em></p>";

        try {
            // เราไม่สามารถใช้ fetch แบบปกติได้โดยตรงกับ Web App ที่ไม่ได้ตั้งค่า CORS
            // เราจะใช้วิธีส่งข้อมูลผ่าน Form แบบซ่อนตัวแทน
            const formData = new FormData();
            formData.append('data', JSON.stringify(payload));

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(payload), // ส่งเป็น JSON string
                mode: 'no-cors', // สำคัญมาก
                headers: {
                    "Content-Type": "text/plain;charset=utf-8", // ใช้ text/plain เพื่อเลี่ยง preflight
                }
            });

            console.log("Score submission attempted.");
            gameOverSummaryEl.innerHTML += "<p style='color:#2ecc71;'>บันทึกคะแนนสำเร็จ!</p>";

        } catch (error) {
            console.error('Error submitting score:', error);
            gameOverSummaryEl.innerHTML += `<p style='color:#e74c3c;'>เกิดข้อผิดพลาดในการบันทึกคะแนน: ${error.message}</p>`;
        }
    }

    function endGame() {
        gameOverContainerEl.classList.remove('hidden');
        scenarioContainerEl.classList.add('hidden');
        feedbackContainerEl.classList.add('hidden');

        const finalScore = Math.round((progress * 0.7) + (morale * 0.3));

        let title = "";
        let summary = "";

        if (progress >= 80 && morale >= 60) {
            title = "🏆 โครงงานประสบความสำเร็จอย่างงดงาม! 🏆";
            summary = `สุดยอดมาก ${playerName}! คุณคือ Project Mastermind ตัวจริง! โครงการสำเร็จด้วยความก้าวหน้า ${progress}% และขวัญกำลังใจทีม ${morale}%. <br><strong>คะแนนสุดท้าย: ${finalScore}</strong>`;
        } else if (progress >= 50) {
            title = "🎉 โครงงานสำเร็จ! 🎉";
            summary = `เยี่ยมมาก ${playerName}! โครงการของคุณสำเร็จตามเป้าหมาย ด้วยความก้าวหน้า ${progress}% และขวัญกำลังใจทีม ${morale}%. <br><strong>คะแนนสุดท้าย: ${finalScore}</strong>`;
        } else {
            title = "😥 โครงงานล้มเหลว 😥";
            summary = `น่าเสียดาย ${playerName} โครงการไปไม่ถึงฝั่งฝัน แต่ความล้มเหลวคือบทเรียนที่ดีที่สุด! <br><strong>คะแนนสุดท้าย: ${finalScore}</strong>`;
        }

        gameOverTitleEl.textContent = title;
        gameOverSummaryEl.innerHTML = summary;
        
        // ส่งคะแนนไปที่ Google Sheet
        submitScore(playerName, progress, morale, finalScore);
    }

    // --- ส่วนการผูก Event Listener ---
    startGameButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', nextScenario);
    restartButton.addEventListener('click', initGame);

    // --- เริ่มต้นเกม ---
    initGame();
});