// 明日方舟配队攻略网页交互

// ========== 封面页 ==========
document.addEventListener('DOMContentLoaded', function() {
    const coverPage = document.getElementById('coverPage');
    const coverEnterBtn = document.getElementById('coverEnterBtn');
    const coverParticles = document.getElementById('coverParticles');
    const coverBgSlides = document.getElementById('coverBgSlides');

    // 背景立绘轮播（6星精英2）
    const COVER_BG_IMAGES = [
        { name: '阿米娅', url: 'https://media.prts.wiki/3/3f/%E7%AB%8B%E7%BB%98_%E9%98%BF%E7%B1%B3%E5%A8%85_2.png' },
        { name: '能天使', url: 'https://media.prts.wiki/1/19/%E7%AB%8B%E7%BB%98_%E8%83%BD%E5%A4%A9%E4%BD%BF_2.png' },
        { name: '银灰', url: 'https://media.prts.wiki/5/5f/%E7%AB%8B%E7%BB%98_%E9%93%B6%E7%81%B0_2.png' },
        { name: '艾雅法拉', url: 'https://media.prts.wiki/2/21/%E7%AB%8B%E7%BB%98_%E8%89%BE%E9%9B%85%E6%B3%95%E6%8B%89_2.png' },
        { name: '塞雷娅', url: 'https://media.prts.wiki/2/2e/%E7%AB%8B%E7%BB%98_%E5%A1%9E%E9%9B%B7%E5%A8%85_2.png' },
        { name: '史尔特尔', url: 'https://media.prts.wiki/2/2e/%E7%AB%8B%E7%BB%98_%E5%8F%B2%E5%B0%94%E7%89%B9%E5%B0%94_2.png' },
        { name: '玛恩纳', url: 'https://media.prts.wiki/f/f0/%E7%AB%8B%E7%BB%98_%E7%8E%9B%E6%81%A9%E7%BA%B3_2.png' },
        { name: '锏', url: 'https://media.prts.wiki/9/95/%E7%AB%8B%E7%BB%98_%E9%94%8F_2.png' },
        { name: '黍', url: 'https://media.prts.wiki/c/cf/%E7%AB%8B%E7%BB%98_%E9%BB%8D_2.png' },
        { name: '维什戴尔', url: 'https://media.prts.wiki/9/94/%E7%AB%8B%E7%BB%98_%E7%BB%B4%E4%BB%80%E6%88%B4%E5%B0%94_2.png' },
        { name: '逻各斯', url: 'https://media.prts.wiki/5/5f/%E7%AB%8B%E7%BB%98_%E9%80%BB%E5%90%84%E6%96%AF_2.png' },
        { name: '伊内丝', url: 'https://media.prts.wiki/3/35/%E7%AB%8B%E7%BB%98_%E4%BC%8A%E5%86%85%E4%B8%9D_2.png' },
        { name: '缄默德克萨斯', url: 'https://media.prts.wiki/f/f2/%E7%AB%8B%E7%BB%98_%E7%BC%84%E9%BB%98%E5%BE%B7%E5%85%8B%E8%90%A8%E6%96%AF_2.png' },
        { name: '麒麟R夜刀', url: 'https://media.prts.wiki/9/9a/%E7%AB%8B%E7%BB%98_%E9%BA%92%E9%BA%9FR%E5%A4%9C%E5%88%80_2.png' },
        { name: '左乐', url: 'https://media.prts.wiki/7/7a/%E7%AB%8B%E7%BB%98_%E5%B7%A6%E4%B9%90_2.png' },
        { name: '维娜·维多利亚', url: 'https://media.prts.wiki/8/8e/%E7%AB%8B%E7%BB%98_%E7%BB%B4%E5%A8%9C%C2%B7%E7%BB%B4%E5%A4%9A%E5%88%A9%E4%BA%9A_2.png' },
        { name: '余', url: 'https://media.prts.wiki/1/1a/%E7%AB%8B%E7%BB%98_%E4%BD%99_2.png' },
        { name: '荒芜拉普兰德', url: 'https://media.prts.wiki/0/0b/%E7%AB%8B%E7%BB%98_%E8%8D%92%E8%8A%9C%E6%8B%89%E6%99%AE%E5%85%B0%E5%BE%B7_2.png' },
        { name: '玛露西尔', url: 'https://media.prts.wiki/4/48/%E7%AB%8B%E7%BB%98_%E7%8E%9B%E9%9C%B2%E8%A5%BF%E5%B0%94_2.png' },
        { name: '凯尔希', url: 'https://media.prts.wiki/6/65/%E7%AB%8B%E7%BB%98_%E5%87%AF%E5%B0%94%E5%B8%8C_2.png' },
        { name: '陈', url: 'https://media.prts.wiki/d/d0/%E7%AB%8B%E7%BB%98_%E9%99%88_2.png' },
        { name: '重岳', url: 'https://media.prts.wiki/a/a8/%E7%AB%8B%E7%BB%98_%E9%87%8D%E5%B2%B3_2.png' },
        { name: '夕', url: 'https://media.prts.wiki/0/0a/%E7%AB%8B%E7%BB%98_%E5%A4%95_2.png' },
        { name: '令', url: 'https://media.prts.wiki/a/a3/%E7%AB%8B%E7%BB%98_%E4%BB%A4_2.png' },
        { name: '浊心斯卡蒂', url: 'https://media.prts.wiki/b/b3/%E7%AB%8B%E7%BB%98_%E6%B5%8A%E5%BF%83%E6%96%AF%E5%8D%A1%E8%92%82_2.png' },
        { name: '耀骑士临光', url: 'https://media.prts.wiki/e/ec/%E7%AB%8B%E7%BB%98_%E8%80%80%E9%AA%91%E5%A3%AB%E4%B8%B4%E5%85%89_2.png' },
        { name: '归溟幽灵鲨', url: 'https://media.prts.wiki/1/16/%E7%AB%8B%E7%BB%98_%E5%BD%92%E6%BA%9F%E5%B9%BD%E7%81%B5%E9%B2%A8_2.png' },
        { name: '百炼嘉维尔', url: 'https://media.prts.wiki/7/76/%E7%AB%8B%E7%BB%98_%E7%99%BE%E7%82%BC%E5%98%89%E7%BB%B4%E5%B0%94_2.png' },
        { name: '假日威龙陈', url: 'https://media.prts.wiki/4/4e/%E7%AB%8B%E7%BB%98_%E5%81%87%E6%97%A5%E5%A8%81%E9%BE%99%E9%99%88_2.png' },
        { name: '异客', url: 'https://media.prts.wiki/3/3f/%E7%AB%8B%E7%BB%98_%E5%BC%82%E5%AE%A2_2.png' },
        { name: '水月', url: 'https://media.prts.wiki/0/09/%E7%AB%8B%E7%BB%98_%E6%B0%B4%E6%9C%88_2.png' },
        { name: '莫斯提马', url: 'https://media.prts.wiki/8/85/%E7%AB%8B%E7%BB%98_%E8%8E%AB%E6%96%AF%E6%8F%90%E9%A9%AC_2.png' }
    ];

    let bgSlideInterval = null;

    // 初始化背景轮播
    if (coverBgSlides) {
        // 随机打乱顺序
        const shuffled = COVER_BG_IMAGES.slice().sort(() => Math.random() - 0.5);
        shuffled.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = 'cover-bg-slide' + (index === 0 ? ' active' : '');
            slide.style.backgroundImage = `url('${img.url}')`;
            coverBgSlides.appendChild(slide);
        });

        let currentSlide = 0;
        const slides = coverBgSlides.querySelectorAll('.cover-bg-slide');
        if (slides.length > 1) {
            bgSlideInterval = setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);
        }
    }

    // 生成漂浮粒子
    if (coverParticles) {
        for (let i = 0; i < 40; i++) {
            const p = document.createElement('div');
            p.className = 'cover-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 8 + 's';
            p.style.animationDuration = (6 + Math.random() * 6) + 's';
            const size = 1 + Math.random() * 2;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            const colors = ['var(--accent-gold)', 'var(--accent-cyan)', 'rgba(155,89,182,0.6)'];
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            coverParticles.appendChild(p);
        }
    }

    // 进入按钮
    if (coverEnterBtn && coverPage) {
        coverEnterBtn.addEventListener('click', function() {
            coverPage.classList.add('hidden');
            if (bgSlideInterval) clearInterval(bgSlideInterval);
            try { localStorage.setItem('arknights-cover-seen', '1'); } catch (e) {}
            setTimeout(() => { coverPage.style.display = 'none'; }, 800);
        });
    }
});

// ========== 主页面交互 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 阵容标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const teamContents = document.querySelectorAll('.team-content');
    const teamMoreBtn = document.getElementById('teamMoreBtn');
    const teamDropdown = document.getElementById('teamDropdown');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // "更多"按钮只负责展开/收起下拉菜单
            if (this.id === 'teamMoreBtn') {
                if (teamDropdown) {
                    teamDropdown.hidden = !teamDropdown.hidden;
                    this.innerHTML = teamDropdown.hidden ? '更多 &#9662;' : '更多 &#9652;';
                }
                return;
            }

            // 点击下拉菜单中的tab时，先收起下拉菜单
            if (teamDropdown && !teamDropdown.hidden) {
                teamDropdown.hidden = true;
                if (teamMoreBtn) teamMoreBtn.innerHTML = '更多 &#9662;';
            }

            // 移除所有active类（主tab和下拉菜单中的tab）
            tabBtns.forEach(b => b.classList.remove('active'));
            teamContents.forEach(c => c.classList.remove('active'));

            // 添加active类到当前选中项
            this.classList.add('active');
            if (tabId && document.getElementById(tabId)) {
                document.getElementById(tabId).classList.add('active');
            }
        });
    });
    
    // 导航栏平滑滚动 + 高亮当前section
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 减去导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 干员推荐 - "更多"按钮展开
    document.querySelectorAll('.op-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const cls = this.getAttribute('data-more-class');
            const parent = this.closest('.operator-list');
            if (!parent) return;
            const hidden = parent.querySelectorAll('.op-more-item[hidden]');
            if (hidden.length > 0) {
                hidden.forEach(el => el.removeAttribute('hidden'));
                this.textContent = '- 收起';
            } else {
                parent.querySelectorAll('.op-more-item').forEach(el => el.setAttribute('hidden', ''));
                this.textContent = '+ 查看更多强力' + cls;
            }
        });
    });

    // ========== 通用页面切换 ==========
    function openPage(pageId) {
        // 先关闭所有 page-section
        document.querySelectorAll('.page-section').forEach(s => s.setAttribute('hidden', ''));
        // 隐藏 squad/atlas 全屏页面（如果打开的话）
        document.body.classList.remove('squad-open', 'atlas-open');
        const squadPage = document.getElementById('squad');
        const atlasPage = document.getElementById('atlas');
        if (squadPage) squadPage.setAttribute('hidden', '');
        if (atlasPage) atlasPage.setAttribute('hidden', '');
        // 隐藏squad和atlas入口
        const squadEntry = document.getElementById('squad-entry');
        const atlasEntry = document.getElementById('atlas-entry');
        if (squadEntry) squadEntry.style.display = 'none';
        if (atlasEntry) atlasEntry.style.display = 'none';

        const page = document.getElementById(pageId);
        if (page) {
            page.removeAttribute('hidden');
            document.body.classList.add('page-open');
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }

    function closePage(pageId) {
        const page = document.getElementById(pageId);
        if (page) page.setAttribute('hidden', '');
        document.body.classList.remove('page-open');
        // 恢复入口卡片
        const squadEntry = document.getElementById('squad-entry');
        const atlasEntry = document.getElementById('atlas-entry');
        if (squadEntry) squadEntry.style.display = '';
        if (atlasEntry) atlasEntry.style.display = '';
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    document.querySelectorAll('[data-open-page]').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.getAttribute('data-open-page');
            openPage(pageId);
        });
    });

    document.querySelectorAll('[data-close-page]').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.getAttribute('data-close-page');
            closePage(pageId);
        });
    });

    // 滚动时高亮当前导航项
    function highlightNavOnScroll() {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // 干员卡片淡入动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 为所有需要动画的元素添加观察
    const animatableElements = document.querySelectorAll('.operator-card, .framework-card, .tip-item');
    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    console.log('明日方舟配队攻略页面已加载完成');
});


// 全干员图鉴：点击进入、搜索和职业筛选
document.addEventListener('DOMContentLoaded', function() {
    const atlas = document.getElementById('atlas');
    const atlasEntry = document.getElementById('atlas-entry');
    const openAtlasButtons = document.querySelectorAll('[data-open-atlas]');
    const closeAtlasButtons = document.querySelectorAll('[data-close-atlas]');
    const atlasSearch = document.getElementById('atlasSearchBox') || document.getElementById('atlasSearch');
    const atlasFilterButtons = document.querySelectorAll('.atlas-filter-btn');
    const atlasCards = document.querySelectorAll('.atlas-operator-card');
    const atlasSections = document.querySelectorAll('.atlas-class-section');
    const atlasStats = document.getElementById('atlasStats');
    let atlasFilter = 'all';
    let atlasKeyword = '';

    function openAtlas(event) {
        if (event) event.preventDefault();
        if (!atlas) return;
        // 关闭squad和page-open状态
        document.body.classList.remove('squad-open', 'page-open');
        const squadPage = document.getElementById('squad');
        if (squadPage) squadPage.setAttribute('hidden', '');
        // 关闭所有page-section
        document.querySelectorAll('.page-section').forEach(s => s.setAttribute('hidden', ''));
        atlas.hidden = false;
        document.body.classList.add('atlas-open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateAtlasDisplay();
    }

    function closeAtlas(event) {
        if (event) event.preventDefault();
        if (!atlas) return;
        document.body.classList.remove('atlas-open');
        atlas.hidden = true;
        if (atlasEntry) {
            window.scrollTo({ top: atlasEntry.offsetTop - 70, behavior: 'smooth' });
        }
    }

    // 多条件筛选状态
    const activeFilters = {
        class: 'all',
        rarity: 'all',
        gender: 'all',
        obtain: 'all'
    };
    let currentSort = 'default';

    function getSearchText(card) {
        return [
            card.dataset.atlasName, card.dataset.atlasClass, card.dataset.atlasRarity,
            card.dataset.atlasBranch, card.dataset.atlasGender, card.dataset.atlasPosition,
            card.dataset.atlasTags, card.dataset.atlasTrait, card.dataset.atlasObtain,
            card.dataset.atlasPrefix, card.dataset.atlasFaction, card.dataset.atlasOrganization,
            card.dataset.atlasTeam, card.dataset.atlasInfoNo, card.dataset.atlasForeignName
        ].filter(Boolean).join(' ');
    }

    function matchesFilters(card) {
        const d = card.dataset;
        if (activeFilters.class !== 'all' && d.atlasClass !== activeFilters.class) return false;
        if (activeFilters.rarity !== 'all' && d.atlasRarity !== activeFilters.rarity) return false;
        if (activeFilters.gender !== 'all' && d.atlasGender !== activeFilters.gender) return false;
        if (activeFilters.obtain !== 'all') {
            const obtain = d.atlasObtain || '';
            if (!obtain.includes(activeFilters.obtain)) return false;
        }
        return true;
    }

    function sortCards(cards) {
        const arr = Array.from(cards);
        if (currentSort === 'rarity-desc') {
            arr.sort((a, b) => {
                const ra = parseInt((a.dataset.atlasRarity || '0').replace('星', '')) || 0;
                const rb = parseInt((b.dataset.atlasRarity || '0').replace('星', '')) || 0;
                return rb - ra;
            });
        } else if (currentSort === 'rarity-asc') {
            arr.sort((a, b) => {
                const ra = parseInt((a.dataset.atlasRarity || '0').replace('星', '')) || 0;
                const rb = parseInt((b.dataset.atlasRarity || '0').replace('星', '')) || 0;
                return ra - rb;
            });
        }
        return arr;
    }

    function updateAtlasDisplay() {
        if (!atlasCards.length) return;
        let visible = 0;
        const keyword = atlasKeyword.toLowerCase();

        // 先筛选
        const matched = [];
        atlasCards.forEach(card => {
            const searchText = getSearchText(card);
            const matchFilter = matchesFilters(card);
            const matchKeyword = !keyword || searchText.toLowerCase().includes(keyword);

            if (matchFilter && matchKeyword) {
                card.classList.remove('hidden');
                matched.push(card);
                visible++;
            } else {
                card.classList.add('hidden');
            }
        });

        // 排序 - 重排DOM顺序
        if (currentSort !== 'default') {
            const sorted = sortCards(matched);
            atlasSections.forEach(section => {
                const grid = section.querySelector('.atlas-operator-grid');
                if (!grid) return;
                const sectionCards = Array.from(grid.querySelectorAll('.atlas-operator-card'));
                const sortedSection = sorted.filter(c => sectionCards.includes(c));
                sortedSection.forEach(c => grid.appendChild(c));
            });
        }

        atlasSections.forEach(section => {
            const hasVisible = section.querySelector('.atlas-operator-card:not(.hidden)');
            section.style.display = hasVisible ? 'block' : 'none';
        });

        if (atlasStats) {
            atlasStats.textContent = `显示 ${visible} 名干员`;
        }
    }

    openAtlasButtons.forEach(button => button.addEventListener('click', openAtlas));
    closeAtlasButtons.forEach(button => button.addEventListener('click', closeAtlas));

    // 新的筛选按钮事件
    document.querySelectorAll('.filter-chip[data-filter-type]').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.filterType;
            const value = this.dataset.filterValue;
            activeFilters[type] = value;

            // 更新同组按钮样式
            document.querySelectorAll(`.filter-chip[data-filter-type="${type}"]`).forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            updateAtlasDisplay();
        });
    });

    // 排序按钮事件
    document.querySelectorAll('.filter-chip[data-sort]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentSort = this.dataset.sort;
            document.querySelectorAll('.filter-chip[data-sort]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateAtlasDisplay();
        });
    });

    if (atlasSearch) {
        atlasSearch.addEventListener('input', function() {
            atlasKeyword = this.value.trim();
            updateAtlasDisplay();
        });
    }

    // 打开图鉴后，如果点击其它导航项，则退出图鉴模式并回到配队页对应位置
    document.querySelectorAll('.nav-link:not([data-open-atlas]):not([data-open-squad])').forEach(link => {
        link.addEventListener('click', function() {
            if (document.body.classList.contains('atlas-open')) {
                document.body.classList.remove('atlas-open');
                if (atlas) atlas.hidden = true;
            }
            if (document.body.classList.contains('squad-open')) {
                document.body.classList.remove('squad-open');
                const squadEl = document.getElementById('squad');
                if (squadEl) squadEl.hidden = true;
            }
        });
    });
});


// 全干员图鉴：干员详情弹窗
document.addEventListener('DOMContentLoaded', function() {
    const detailModal = document.getElementById('atlasDetailModal');
    const detailName = document.getElementById('atlasDetailName');
    const detailClass = document.getElementById('atlasDetailClass');
    const detailSubtitle = document.getElementById('atlasDetailSubtitle');
    const detailLimited = document.getElementById('atlasDetailLimited');
    const detailGrid = document.getElementById('atlasDetailGrid');
    const detailTrait = document.getElementById('atlasDetailTrait');
    const detailSkills = document.getElementById('atlasDetailSkills');
    const skillSource = document.getElementById('atlasSkillSource');
    const galleryImage = document.getElementById('atlasGalleryImage');
    const galleryCaption = document.getElementById('atlasGalleryCaption');
    const galleryDots = document.getElementById('atlasGalleryDots');
    const galleryPrev = document.querySelector('[data-gallery-prev]');
    const galleryNext = document.querySelector('[data-gallery-next]');
    let currentGallery = [];
    let currentGalleryIndex = 0;
    const skillCache = new Map();

    const detailFields = [
        ['星级', 'atlasRarity'],
        ['职业', 'atlasClass'],
        ['职业分支', 'atlasBranch'],
        ['性别', 'atlasGender'],
        ['部署位置', 'atlasPosition'],
        ['获取途径', 'atlasObtain'],
        ['外文名', 'atlasForeignName'],
        ['所属国家/势力', 'atlasFaction'],
        ['所属组织', 'atlasOrganization'],
        ['所属团队', 'atlasTeam'],
    ];

    function safeValue(value) {
        return value && value !== '未知' ? value : '未知';
    }

    function escapeHtml(value) {
        return safeValue(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function getGalleryFromCard(data) {
        try {
            const parsed = JSON.parse(data.atlasGallery || '[]');
            if (Array.isArray(parsed) && parsed.length) {
                return parsed.filter(item => item && item.url);
            }
        } catch (error) {
            // 忽略无效图片列表
        }

        const fallback = [];
        if (data.atlasIllust) {
            fallback.push({ label: '精英0/1', url: data.atlasIllust });
        }
        return fallback;
    }

    function renderGallery() {
        if (!galleryImage || !galleryCaption || !galleryDots) return;
        const item = currentGallery[currentGalleryIndex];

        if (!item) {
            galleryImage.removeAttribute('src');
            galleryCaption.textContent = '暂无立绘';
            galleryDots.innerHTML = '';
            if (galleryPrev) galleryPrev.disabled = true;
            if (galleryNext) galleryNext.disabled = true;
            return;
        }

        galleryImage.src = item.url;
        galleryImage.alt = item.label || '干员立绘';
        galleryCaption.textContent = `${item.label || '立绘'}（${currentGalleryIndex + 1}/${currentGallery.length}）`;
        galleryDots.innerHTML = currentGallery.map((_, index) => {
            return `<button class="atlas-gallery-dot ${index === currentGalleryIndex ? 'active' : ''}" type="button" data-gallery-index="${index}" aria-label="切换到第${index + 1}张"></button>`;
        }).join('');

        if (galleryPrev) galleryPrev.disabled = currentGallery.length <= 1;
        if (galleryNext) galleryNext.disabled = currentGallery.length <= 1;
    }

    function changeGallery(step) {
        if (!currentGallery.length) return;
        currentGalleryIndex = (currentGalleryIndex + step + currentGallery.length) % currentGallery.length;
        renderGallery();
    }

    function cleanSkillText(value) {
        return String(value || '')
            .replace(/\s+/g, ' ')
            .replace(/编辑/g, '')
            .replace(/显示算法为.*?最终乘算/g, '')
            .replace(/直接乘算里属于叠加，并非叠乘/g, '')
            .trim();
    }

    function getCellText(cell) {
        return cleanSkillText(cell ? cell.textContent : '');
    }

    function parseSkillTable(table, fallbackTitle) {
        const rows = Array.from(table.querySelectorAll('tr'))
            .map(row => Array.from(row.querySelectorAll('th,td')).map(getCellText).filter(Boolean))
            .filter(row => row.length);
        if (!rows.length) return null;

        const titleRow = rows[0] || [];
        const headerIndex = rows.findIndex(row => row.some(cell => cell === '等级') && row.some(cell => cell.includes('描述')));
        if (headerIndex < 0) return null;

        const headers = rows[headerIndex].slice(0, 5);
        const dataRows = rows.slice(headerIndex + 1)
            .filter(row => row[0] && (/^\d+$/.test(row[0]) || /^Rank/.test(row[0])))
            .map(row => row.slice(0, 5));

        if (!dataRows.length) return null;

        const first = dataRows[0];
        const last = dataRows[dataRows.length - 1];
        const skillName = titleRow[1] || fallbackTitle || '技能';
        const skillType = titleRow.slice(2).join(' · ');
        const gainParts = [];
        if (first[1] && last[1] && first[1] !== last[1]) gainParts.push(`效果：${first[1]} → ${last[1]}`);
        if (first[2] !== last[2]) gainParts.push(`初始技力：${first[2] || '-'} → ${last[2] || '-'}`);
        if (first[3] !== last[3]) gainParts.push(`消耗技力：${first[3] || '-'} → ${last[3] || '-'}`);
        if (first[4] !== last[4]) gainParts.push(`持续时间：${first[4] || '-'} → ${last[4] || '-'}`);

        return {
            name: skillName,
            type: skillType,
            headers,
            rows: dataRows,
            gain: gainParts.length ? gainParts.join('；') : '满级主要提升请参考下方逐级表格。'
        };
    }

    function extractSkillsFromPrtsHtml(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const skillHeadline = doc.getElementById('技能');
        if (!skillHeadline) return [];
        const skillHeading = skillHeadline.closest('h2');
        if (!skillHeading) return [];

        const sectionNodes = [];
        let node = skillHeading.nextElementSibling;
        while (node && !(node.tagName === 'H2')) {
            sectionNodes.push(node);
            node = node.nextElementSibling;
        }

        const skills = [];
        sectionNodes.forEach((sectionNode, index) => {
            const titleText = cleanSkillText(sectionNode.textContent || '');
            const isSkillTitle = sectionNode.tagName === 'H3' || (sectionNode.tagName === 'P' && /^技能\d+/.test(titleText));
            if (!isSkillTitle) return;
            const title = cleanSkillText(sectionNode.textContent) || `技能${index + 1}`;
            let tableNode = sectionNode.nextElementSibling;
            const candidates = [];
            while (tableNode && tableNode.tagName !== 'H3' && tableNode.tagName !== 'H2' && tableNode.tagName !== 'P') {
                const table = tableNode.matches?.('table') ? tableNode : tableNode.querySelector?.('table');
                if (table) {
                    const parsed = parseSkillTable(table, title);
                    if (parsed) candidates.push(parsed);
                }
                tableNode = tableNode.nextElementSibling;
            }
            if (candidates.length) {
                candidates.sort((a, b) => {
                    const la = (a.headers || []).join('').length;
                    const lb = (b.headers || []).join('').length;
                    return la - lb;
                });
                skills.push(candidates[0]);
            }
        });

        return skills;
    }

    function renderSkillCards(skills, operatorName) {
        if (!detailSkills) return;
        if (!skills.length) {
            detailSkills.innerHTML = `<p class="atlas-skill-status">暂未读取到技能表格。可点击右上方“前往 PRTS 查看”查看原始页面。</p>`;
            return;
        }

        function extractNumericTokens(text) {
            return String(text || '').match(/[+-]?\d+(?:\.\d+)?%?/g) || [];
        }

        function highlightChangedNumbers(value, baseValue) {
            const text = String(value || '-');
            const baseTokens = extractNumericTokens(baseValue);
            let tokenIndex = 0;
            return escapeHtml(text).replace(/[+-]?\d+(?:\.\d+)?%?/g, token => {
                const changed = baseTokens[tokenIndex] !== token;
                tokenIndex += 1;
                return changed ? `<span class="skill-boost-damage">${token}</span>` : token;
            });
        }

        function getBoostClass(header, value, baseValue) {
            if (value === baseValue) return '';
            const current = parseFloat(String(value || '').replace(/[^\d.-]/g, ''));
            const base = parseFloat(String(baseValue || '').replace(/[^\d.-]/g, ''));
            const label = String(header || '');

            if (label.includes('消耗')) {
                return current < base ? 'skill-boost-rotation' : 'skill-boost-change';
            }
            if (label.includes('初始')) {
                return current > base ? 'skill-boost-rotation' : 'skill-boost-change';
            }
            if (label.includes('持续')) {
                return current > base ? 'skill-boost-duration' : 'skill-boost-change';
            }
            return 'skill-boost-change';
        }

        function renderSkillCell(row, baseRow, headers, cellIndex) {
            const value = row[cellIndex] || '-';
            const baseValue = baseRow?.[cellIndex] || '';
            const header = headers[cellIndex] || '';

            if (cellIndex === 1) {
                return `<td>${highlightChangedNumbers(value, baseValue)}</td>`;
            }

            if (cellIndex >= 2) {
                const boostClass = getBoostClass(header, value, baseValue);
                return `<td>${boostClass ? `<span class="${boostClass}">${escapeHtml(value)}</span>` : escapeHtml(value)}</td>`;
            }

            return `<td>${escapeHtml(value)}</td>`;
        }

        detailSkills.innerHTML = skills.map((skill, index) => {
            const headers = skill.headers.length ? skill.headers : ['等级', '描述', '初始', '消耗', '持续'];
            const baseRow = skill.rows[0] || [];
            const rows = skill.rows.map(row => {
                return `<tr>${headers.map((_, cellIndex) => renderSkillCell(row, baseRow, headers, cellIndex)).join('')}</tr>`;
            }).join('');
            return `
                <section class="atlas-skill-card">
                    <div class="atlas-skill-card-head">
                        <h5>技能${index + 1}：${escapeHtml(skill.name)}</h5>
                        <span>${escapeHtml(skill.type || '技能类型未知')}</span>
                    </div>
                    <div class="atlas-skill-gain"><strong>升级收益：</strong>${escapeHtml(skill.gain)}</div>
                    <button class="atlas-skill-toggle" type="button">展开详情 &#9662;</button>
                    <div class="atlas-skill-detail" hidden>
                        <div class="atlas-skill-table-wrap">
                            <table class="atlas-skill-table">
                                <thead><tr>${headers.map(header => `<th>${escapeHtml(header)}</th>`).join('')}</tr></thead>
                                <tbody>${rows}</tbody>
                            </table>
                        </div>
                    </div>
                </section>
            `;
        }).join('');
    }

    async function loadOperatorSkills(operatorName) {
        if (!detailSkills) return;
        const pageUrl = `https://prts.wiki/w/${encodeURIComponent(operatorName)}`;
        if (skillSource) {
            skillSource.href = pageUrl;
        }

        const localSkillData = window.ARKNIGHTS_OPERATOR_SKILLS?.[operatorName];
        if (localSkillData && Array.isArray(localSkillData.skills)) {
            if (localSkillData.source && skillSource) skillSource.href = localSkillData.source;
            renderSkillCards(localSkillData.skills, operatorName);
            return;
        }

        detailSkills.innerHTML = '<p class="atlas-skill-status">本地缓存暂无该干员技能，正在从 PRTS 读取...</p>';

        if (skillCache.has(operatorName)) {
            renderSkillCards(skillCache.get(operatorName), operatorName);
            return;
        }

        try {
            const apiUrl = `https://prts.wiki/api.php?action=parse&page=${encodeURIComponent(operatorName)}&prop=text&format=json&origin=*`;
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('网络请求失败');
            const json = await response.json();
            const html = json?.parse?.text?.['*'] || '';
            const skills = extractSkillsFromPrtsHtml(html);
            skillCache.set(operatorName, skills);
            renderSkillCards(skills, operatorName);
        } catch (error) {
            detailSkills.innerHTML = `<p class="atlas-skill-status">技能数据读取失败。可点击右上方“前往 PRTS 查看”查看原始页面。</p>`;
        }
    }

    // 技能详情展开/收起
    document.getElementById('detailSkills')?.addEventListener('click', function(e) {
        const toggleBtn = e.target.closest('.atlas-skill-toggle');
        if (!toggleBtn) return;
        const detail = toggleBtn.nextElementSibling;
        if (!detail) return;
        if (detail.hidden) {
            detail.removeAttribute('hidden');
            toggleBtn.innerHTML = '收起详情 &#9652;';
        } else {
            detail.setAttribute('hidden', '');
            toggleBtn.innerHTML = '展开详情 &#9662;';
        }
    });

    function openDetail(card) {
        if (!detailModal) return;
        const data = card.dataset;
        detailName.textContent = safeValue(data.atlasName);
        detailClass.textContent = `${safeValue(data.atlasClass)}干员档案`;
        detailSubtitle.textContent = `${safeValue(data.atlasRarity)} · ${safeValue(data.atlasBranch)}`;
        detailTrait.textContent = safeValue(data.atlasTrait);

        if (data.atlasLimited === '是') {
            detailLimited.classList.add('show');
            detailLimited.textContent = '限定干员';
        } else {
            detailLimited.classList.remove('show');
            detailLimited.textContent = '';
        }

        currentGallery = getGalleryFromCard(data);
        currentGalleryIndex = 0;
        renderGallery();

        detailGrid.innerHTML = detailFields
            .map(([label, key]) => [label, safeValue(data[key]), key])
            .filter(([, value]) => value !== '未知')
            .map(([label, value]) => {
            return `<div class="atlas-detail-item">
                <div class="atlas-detail-label">${label}</div>
                <div class="atlas-detail-value">${escapeHtml(value)}</div>
            </div>`;
        }).join('');

        // 重置搭配建议
        const pairContent = document.getElementById('atlasPairContent');
        const pairToggle = document.getElementById('atlasPairToggle');
        if (pairContent) pairContent.setAttribute('hidden', '');
        if (pairToggle) pairToggle.innerHTML = '展开搭配建议 &#9662;';

        detailModal.hidden = false;
        document.body.style.overflow = 'hidden';
        loadOperatorSkills(safeValue(data.atlasName));
    }

    // ========== 建议搭配数据 ==========
    const COMPANIONS = {
        '玛恩纳': ['锏', '史尔特尔', '艾雅法拉', '铃兰', '伊芙利特', '塞雷娅', '推荐理由：玛恩纳三技能需要控制型辅助增伤（铃兰/灵知）+奶盾续命（塞雷娅），配合法蒸队或决战队使用'],
        '史尔特尔': ['塞雷娅', '纯烬艾雅法拉', '夜莺', '艾雅法拉', '伊芙利特', '推荐理由：42真银斩+二技能破甲线，配合奶盾保证生存，配合法系形成法蒸核爆'],
        '维什戴尔': ['纯烬艾雅法拉', '伊内丝', '塞雷娅', '桃金娘', '黍', '推荐理由：EW弹药输出极高，伊内丝增伤，纯烬/塞雷娅续航，桃金娘爆费启动，黍控制路径'],
        '银灰': ['棘刺', '煌', '泥岩', '塞雷娅', '白面鸮', '推荐理由：真银斩大范围清屏，配合基石干员（棘刺/煌/泥岩）永续站场'],
        '伊芙利特': ['艾雅法拉', '塞雷娅', '夜莺', '纯烬艾雅法拉', '推荐理由：小火龙直线清场，配合羊点燃+塞雷娅钙质化增伤形成法蒸体系'],
        '塞雷娅': ['纯烬艾雅法拉', '夜莺', '泥岩', '伊芙利特', '玛恩纳', '推荐理由：六边形战士，治疗/回技力/钙质化增伤三位一体，几乎适配所有队伍'],
        '缄默德克萨斯': ['桃金娘', '纯烬艾雅法拉', '伊内丝', '令', '推荐理由：快活切后天花板，二技能法伤眩晕+沉默，配合伊内丝形成切后链'],
        '艾雅法拉': ['伊芙利特', '塞雷娅', '夜莺', '纯烬艾雅法拉', '推荐理由：火山二技能是法系核心输出，配合小火龙+塞雷娅形成法蒸'],
        '夜莺': ['纯烬艾雅法拉', '塞雷娅', '艾雅法拉', '史尔特尔', '推荐理由：法抗护盾+大范围群奶，法蒸队必备生存位'],
        '锏': ['铃兰', '灵知', '塞雷娅', '玛恩纳', '推荐理由：战栗控制+高爆发，配合铃兰/灵知增伤形成控制链'],
        '桃金娘': ['风笛', '极境', '德克萨斯', '推荐理由：爆费先锋核心，风笛配合费用减半再部署，快速启动'],
        '风笛': ['桃金娘', '推进之王', '极境', '推荐理由：二技能自动回费+群体爆费，配合桃金娘形成最快爆费体系'],
        '棘刺': ['银灰', '煌', '塞雷娅', '泥岩', '推荐理由：至高之术永续群攻，配合基石干员挂机推图'],
        '煌': ['银灰', '棘刺', '塞雷娅', '白面鸮', '推荐理由：链锯延伸群攻+抵抗，基石挂机体系核心'],
        '泥岩': ['塞雷娅', '星熊', '白面鸮', '推荐理由：绝食自回血单守一路，不需要医疗，节省编队位'],
        '令': ['桃金娘', '纯烬艾雅法拉', '伊内丝', '推荐理由：大龙替代重装+输出，双人通关神器（ZC常用打法）'],
        '铃兰': ['玛恩纳', '锏', '艾雅法拉', '塞雷娅', '推荐理由：狐火渺然增伤+停顿控制，配合决战技干员爆发极高'],
        '纯烬艾雅法拉': ['史尔特尔', '维什戴尔', '玛恩纳', '推荐理由：大范围治疗+攻击力加成，当前版本最强单奶'],
        '逻各斯': ['伊芙利特', '艾雅法拉', '澄闪', '黍', '推荐理由：五周年限定元素术师，配合法系队伍输出最大化，与黍形成双核挂机'],
        '伊内丝': ['维什戴尔', '缄默德克萨斯', '令', '推荐理由：增伤拐+切入输出，配合EW/异德形成切入链'],
        '白面鸮': ['塞雷娅', '纯烬艾雅法拉', '艾雅法拉', '推荐理由：技力光环全队加速，法蒸队加速技能回转'],
        '华法琳': ['能天使', '维什戴尔', '灰烬', '推荐理由：血怒加攻拐，配合速狙队物理爆发'],
        '能天使': ['华法琳', '空弦', '灰烬', '极境', '推荐理由：过载三连击，配合华法琳血怒+拐形成速狙爆发'],
        '澄闪': ['艾雅法拉', '伊芙利特', '夜莺', '推荐理由：三技能全图浮游炮攻击，法系群攻核心输出位'],
        '灵知': ['铃兰', '莫斯提马', '玛恩纳', '推荐理由：冻结脆弱+控制，配合铃兰形成双重增伤控制链'],
        '莫斯提马': ['灵知', '铃兰', '艾雅法拉', '推荐理由：时停+减速群攻控制，配合灵知冻结形成全控体系'],
        '乌尔比安': ['泥岩', '斥罪', '赫德雷', '推荐理由：自回血永续近卫，绝食队核心输出位，不占用医疗位'],
        '斥罪': ['泥岩', '乌尔比安', '塞雷娅', '推荐理由：护盾反伤+自回血，绝食队坚实前排，配合泥岩双绝食'],
        '黍': ['维什戴尔', '逻各斯', '玛恩纳', '推荐理由：路径控制+地块回血，配合EW/逻各斯形成双核挂机体系'],
        '麒麟R夜刀': ['缄默德克萨斯', '伊内丝', '令', '推荐理由：怪猎联动限定，快速部署+高爆发切后，配合快活链'],
        '艾拉': ['缄默德克萨斯', '伊内丝', '维什戴尔', '推荐理由：彩虹六号联动，高DPS+自带脆弱效果，危机合约常驻'],
        '年': ['塞雷娅', '星熊', '纯烬艾雅法拉', '推荐理由：限定重装，全队加防+三技能护盾吸收伤害'],
        '瑕光': ['黍', '铃兰', '塞雷娅', '推荐理由：先贤化身治疗+睡眠控制，卡西米尔队核心治疗位'],
        '星熊': ['泥岩', '年', '塞雷娅', '推荐理由：物理重装天花板，反伤+高防御，基石队坚实前排'],
        '耀骑士临光': ['塞雷娅', '缄默德克萨斯', '纯烬艾雅法拉', '推荐理由：耀阳颔首真伤切Boss，不占部署位，配合快活切后'],
        '极境': ['桃金娘', '能天使', '空弦', '推荐理由：执旗手爆费+减速减甲，速狙队核心先锋'],
        '德克萨斯': ['桃金娘', '极境', '推进之王', '推荐理由：剑雨群体眩晕+开场两费，功能型爆费先锋'],
        '推进之王': ['桃金娘', '风笛', '极境', '推荐理由：前期站场输出，二技能自动回费+攻击，稳定费用产出'],
        '晓歌': ['桃金娘', '缄默德克萨斯', '极境', '推荐理由：情报官攻击回费+快速部署切后，新爆费先锋选择'],
        '提丰': ['白面鸮', '塞雷娅', '纯烬艾雅法拉', '推荐理由：二技能永续+三技能超远距点名，混伤输出位'],
        '莱伊': ['华法琳', '白面鸮', '能天使', '推荐理由：弹药机制单体伤害极高，仅次于EW的单体狙击'],
        '刻俄柏': ['塞雷娅', '艾雅法拉', '白面鸮', '推荐理由：二技能剥壳剥一切高甲，灵活的单体处理位'],
        '山': ['泥岩', '塞雷娅', '棘刺', '推荐理由：二技能自回血永续站场，基石队近卫位，挂机推图好帮手'],
        '赫德雷': ['泥岩', '乌尔比安', '白面鸮', '推荐理由：自回血永续近卫，绝食队副输出位'],
        '归溟幽灵鲨': ['泥岩', '星熊', '塞雷娅', '推荐理由：替身回血+锁血机制，绝食队终极保命位'],
        '空': ['华法琳', '能天使', '白面鸮', '推荐理由：二技能群体加攻速，速狙队最强增益辅助'],
        '空弦': ['华法琳', '能天使', '极境', '推荐理由：二技能散射+三技能蓄力，速狙队副输出位'],
        '灰烬': ['能天使', '华法琳', '空', '推荐理由：ASH高爆发切后+三技能全屏伤害，速狙队爆发位'],
        '蜜莓': ['纯烬艾雅法拉', '塞雷娅', '推荐理由：元素损伤治疗，肉鸽和主线必备治疗位'],
        '苏苏洛': ['纯烬艾雅法拉', '白面鸮', '推荐理由：四星冥土追魂，二技能爆发治疗极高，低配必备'],
        '蛇屠箱': ['白面鸮', '苏苏洛', '推荐理由：4星物防天花板，开技能挡4自回血，低配重装首选'],
        '临光': ['塞雷娅', '白面鸮', '推荐理由：奶盾+天马光环治疗，前期非常好用的过渡重装'],
        '阿': ['史尔特尔', '玛恩纳', '能天使', '推荐理由：榴莲针二技能爆发+三技能真伤，万能增伤拐位'],
        '夕': ['令', '艾雅法拉', '纯烬艾雅法拉', '推荐理由：三技能画大饼群体法伤+控制，配合令/法系输出'],
        '浊心斯卡蒂': ['纯烬艾雅法拉', '塞雷娅', '夜莺', '推荐理由：三技能提供攻击力+攻速光环，深海队核心拐位'],
        '迷迭香': ['艾雅法拉', '伊芙利特', '白面鸮', '推荐理由：三技能全图浮游炮+辅助推人，法系群攻输出位'],
        '傀影': ['令', '桃金娘', '缄默德克萨斯', '推荐理由：三技能分身+幻影，肉鸽常用核，配合令双核'],
        '号角': ['银灰', '玛恩纳', '塞雷娅', '推荐理由：三技能全图支援炮击，混伤+控制决战技干员'],
        '重岳': ['塞雷娅', '银灰', '白面鸮', '推荐理由：多段连击+回血永续，配合同样带永续的基石干员挂机'],
        '仇白': ['银灰', '棘刺', '塞雷娅', '推荐理由：三技能多段高爆发+法伤，配合同样永续的基石队'],
        '鸿雪': ['纯烬艾雅法拉', '白面鸮', '艾雅法拉', '推荐理由：二技能永续群攻+自回血，基石队新晋核心近卫'],
        '锏': ['铃兰', '灵知', '塞雷娅', '玛恩纳', '推荐理由：战栗控制+高爆发，配合铃兰/灵知增伤形成控制链'],
        '焰影苇草': ['纯烬艾雅法拉', '塞雷娅', '艾雅法拉', '推荐理由：元素治疗+攻击力加成，当前版本强力单奶位'],
        '缪尔赛思': ['纯烬艾雅法拉', '塞雷娅', '白面鸮', '推荐理由：全图治疗+减速+元素奶，深海队/肉鸽万金油治疗'],
        '垣州': ['风笛', '桃金娘', '极境', '推荐理由：新情报官先锋，快速部署+攻击回费，搭配爆费体系'],
    };

    function renderPairSuggestions(operatorName) {
        const pairContent = document.getElementById('atlasPairContent');
        if (!pairContent) return;

        let companions = COMPANIONS[operatorName];
        if (!companions) {
            // 通用推荐
            companions = ['塞雷娅', '纯烬艾雅法拉', '桃金娘', '推荐理由：未收录该干员的专属搭配，以上为通用万金油推荐'];
        }

        const reason = companions.find(c => c.startsWith('推荐理由')) || '';
        const names = companions.filter(c => !c.startsWith('推荐理由'));

        pairContent.innerHTML = names.length ? `
            <div class="atlas-pair-list">
                ${names.map(n => `<span class="atlas-pair-tag">${escapeHtml(n)}</span>`).join('')}
            </div>
            ${reason ? `<p class="atlas-pair-reason">${escapeHtml(reason.replace('推荐理由：', ''))}</p>` : ''}
        ` : '<p class="atlas-skill-status">暂无搭配建议</p>';
    }

    // 搭配建议展开/收起
    document.getElementById('atlasPairToggle')?.addEventListener('click', function() {
        const content = document.getElementById('atlasPairContent');
        if (!content) return;
        const name = document.getElementById('atlasDetailName')?.textContent || '';
        if (content.hidden) {
            renderPairSuggestions(name);
            content.removeAttribute('hidden');
            this.innerHTML = '收起搭配建议 &#9652;';
        } else {
            content.setAttribute('hidden', '');
            this.innerHTML = '展开搭配建议 &#9662;';
        }
    });

    function closeDetail() {
        if (!detailModal) return;
        detailModal.hidden = true;
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.atlas-operator-card').forEach(card => {
        card.addEventListener('click', () => openDetail(card));
    });

    window.openAtlasOperatorDetailByName = function(name) {
        const card = Array.from(document.querySelectorAll('.atlas-operator-card')).find(item => item.dataset.atlasName === name);
        if (card) openDetail(card);
    };

    document.querySelectorAll('[data-close-atlas-detail]').forEach(button => {
        button.addEventListener('click', closeDetail);
    });

    if (galleryPrev) {
        galleryPrev.addEventListener('click', () => changeGallery(-1));
    }

    if (galleryNext) {
        galleryNext.addEventListener('click', () => changeGallery(1));
    }

    if (galleryDots) {
        galleryDots.addEventListener('click', event => {
            const dot = event.target.closest('[data-gallery-index]');
            if (!dot) return;
            currentGalleryIndex = Number(dot.dataset.galleryIndex) || 0;
            renderGallery();
        });
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && detailModal && !detailModal.hidden) {
            closeDetail();
        }
        if (detailModal && !detailModal.hidden && event.key === 'ArrowLeft') {
            changeGallery(-1);
        }
        if (detailModal && !detailModal.hidden && event.key === 'ArrowRight') {
            changeGallery(1);
        }
    });
});


// ========== 编队模拟 ==========
document.addEventListener('DOMContentLoaded', function() {
    const squadPage = document.getElementById('squad');
    const squadEntry = document.getElementById('squad-entry');
    const openSquadButtons = document.querySelectorAll('[data-open-squad]');
    const closeSquadButtons = document.querySelectorAll('[data-close-squad]');
    const squadGrid = document.getElementById('squadGrid');
    const squadCount = document.getElementById('squadCount');
    const squadAvgRarity = document.getElementById('squadAvgRarity');
    const squadClassDist = document.getElementById('squadClassDist');
    const squadAnalyzeBtn = document.getElementById('squadAnalyzeBtn');
    const squadAnalysisPanel = document.getElementById('squadAnalysisPanel');
    const squadAnalysisContent = document.getElementById('squadAnalysisContent');
    const squadAnalysisCloseBtn = document.getElementById('squadAnalysisCloseBtn');

    // 弹窗元素
    const selectModal = document.getElementById('squadSelectModal');
    const configModal = document.getElementById('squadConfigModal');
    const importModal = document.getElementById('squadImportModal');
    const selectGrid = document.getElementById('squadSelectGrid');
    const squadSearchBox = document.getElementById('squadSearchBox');

    // 配置面板元素
    const configAvatar = document.getElementById('squadConfigAvatar');
    const configName = document.getElementById('squadConfigName');
    const configSubtitle = document.getElementById('squadConfigSubtitle');
    const configSkill = document.getElementById('squadConfigSkill');
    const configLevel = document.getElementById('squadConfigLevel');
    const configLevelVal = document.getElementById('squadConfigLevelVal');
    const configMastery = document.getElementById('squadConfigMastery');
    const configMasteryVal = document.getElementById('squadConfigMasteryVal');
    const configPotential = document.getElementById('squadConfigPotential');
    const configPotentialVal = document.getElementById('squadConfigPotentialVal');
    const configModule = document.getElementById('squadConfigModule');

    let squadData = loadSquad();
    let currentSlotIndex = -1;
    let currentConfigIndex = -1;
    let allOperators = [];
    let squadSelectFilters = { class: 'all', rarity: 'all' };
    let squadSearchKeyword = '';

    // 星级对应的等级上限
    const maxLevelByRarity = { '1星': 30, '2星': 55, '3星': 60, '4星': 70, '5星': 80, '6星': 90 };

    // 从图鉴卡片提取干员数据
    function extractOperators() {
        const cards = document.querySelectorAll('.atlas-operator-card');
        const ops = [];
        const moduleMap = window.ARKNIGHTS_OPERATOR_MODULES || {};
        cards.forEach(card => {
            const d = card.dataset;
            if (!d.atlasName) return;
            ops.push({
                name: d.atlasName,
                class: d.atlasClass || '未知',
                rarity: d.atlasRarity || '未知',
                branch: d.atlasBranch || '未知',
                avatar: d.atlasAvatar || '',
                illust: d.atlasIllust || '',
                limited: d.atlasLimited === '是',
                gender: d.atlasGender || '未知',
                position: d.atlasPosition || '未知',
                obtain: d.atlasObtain || '未知',
                tags: d.atlasTags || '',
                trait: d.atlasTrait || '',
                skillCount: parseInt(d.atlasSkillCount || '3', 10) || 3,
                modules: Array.isArray(moduleMap[d.atlasName]) ? moduleMap[d.atlasName] : []
            });
        });
        // 按星级降序排列
        ops.sort((a, b) => {
            const ra = parseInt((a.rarity || '0').replace('星', '')) || 0;
            const rb = parseInt((b.rarity || '0').replace('星', '')) || 0;
            return rb - ra;
        });
        return ops;
    }

    // localStorage
    function loadSquad() {
        try {
            const saved = localStorage.getItem('arknights-squad');
            if (saved) return normalizeSquad(JSON.parse(saved));
        } catch (e) {}
        return new Array(12).fill(null);
    }

    function saveSquad() {
        squadData = normalizeSquad(squadData);
        localStorage.setItem('arknights-squad', JSON.stringify(squadData));
    }

    function normalizeSquad(data) {
        const result = Array.isArray(data) ? data.slice(0, 12) : [];
        while (result.length < 12) result.push(null);

        const usedNames = new Set();
        return result.map(member => {
            if (!member || !member.name) return null;
            if (usedNames.has(member.name)) return null;
            usedNames.add(member.name);
            return member;
        });
    }

    // 打开/关闭编队页面
    function openSquad(e) {
        if (e) e.preventDefault();
        if (!squadPage) return;
        // 关闭atlas和page-open状态
        document.body.classList.remove('atlas-open', 'page-open');
        const atlasPage = document.getElementById('atlas');
        if (atlasPage) atlasPage.setAttribute('hidden', '');
        // 关闭所有page-section
        document.querySelectorAll('.page-section').forEach(s => s.setAttribute('hidden', ''));
        squadPage.hidden = false;
        document.body.classList.add('squad-open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (!allOperators.length) {
            allOperators = extractOperators();
        }
        // 每次进入编队界面时清空上一次选择
        squadData = new Array(12).fill(null);
        renderSquad();
        renderSquadHistory();
    }

    function closeSquad(e) {
        if (e) e.preventDefault();
        if (!squadPage) return;
        document.body.classList.remove('squad-open');
        squadPage.hidden = true;
        if (squadEntry) {
            window.scrollTo({ top: squadEntry.offsetTop - 70, behavior: 'smooth' });
        }
    }

    openSquadButtons.forEach(btn => btn.addEventListener('click', openSquad));
    closeSquadButtons.forEach(btn => btn.addEventListener('click', closeSquad));

    // 导航栏切换：点击其它导航项时退出编队模式
    document.querySelectorAll('.nav-link:not([data-open-squad])').forEach(link => {
        link.addEventListener('click', function() {
            if (document.body.classList.contains('squad-open')) {
                document.body.classList.remove('squad-open');
                if (squadPage) squadPage.hidden = true;
            }
        });
    });

    // 渲染编队槽位
    function getClassKey(className) {
        const map = {
            '先锋': 'vanguard',
            '近卫': 'guard',
            '重装': 'defender',
            '狙击': 'sniper',
            '术师': 'caster',
            '医疗': 'medic',
            '辅助': 'supporter',
            '特种': 'specialist'
        };
        return map[className] || 'unknown';
    }

    function renderSquad() {
        if (!squadGrid) return;
        squadGrid.innerHTML = '';
        squadData.forEach((member, index) => {
            const slot = document.createElement('div');
            slot.className = 'squad-slot' + (member ? ' filled' : ' empty');
            slot.dataset.slotIndex = index;

            if (member) {
                const op = allOperators.find(o => o.name === member.name) || {};
                const maxLvl = maxLevelByRarity[op.rarity] || 90;
                const level = Math.min(member.level || maxLvl, maxLvl);
                const classKey = getClassKey(op.class);
                const skillCount = Math.min(Math.max(op.skillCount || 3, 1), 3);
                const modules = Array.isArray(op.modules) ? op.modules : [];
                const hasModules = modules.length > 0;

                // 快速选择控件
                let quickSelectHtml = '';
                if (skillCount > 1) {
                    quickSelectHtml += `<div class="squad-quick-skills" data-slot-index="${index}">`;
                    for (let i = 1; i <= skillCount; i++) {
                        quickSelectHtml += `<span class="squad-quick-skill${member.skill === i ? ' active' : ''}" data-skill="${i}">S${i}</span>`;
                    }
                    quickSelectHtml += '</div>';
                }
                if (hasModules) {
                    const moduleNames = ['无'].concat(modules);
                    const currentModule = member.module || '无';
                    quickSelectHtml += `<select class="squad-quick-module-select${currentModule !== '无' ? ' active' : ''}" data-slot-index="${index}" title="选择模组">`;
                    moduleNames.forEach(moduleName => {
                        const label = moduleName === '无' ? '无模组' : moduleName;
                        quickSelectHtml += `<option value="${moduleName}"${currentModule === moduleName ? ' selected' : ''}>${label}</option>`;
                    });
                    quickSelectHtml += '</select>';
                }

                slot.innerHTML = `
                    <span class="squad-slot-index">${String(index + 1).padStart(2, '0')}</span>
                    <span class="squad-class-ribbon ${classKey}">${op.class || '未知'}</span>
                    <img class="squad-slot-avatar squad-slot-face" src="${op.avatar || ''}" alt="${member.name}" loading="lazy">
                    <div class="squad-slot-info">
                        <div class="squad-slot-name">${member.name}</div>
                        <div class="squad-slot-meta">S${member.skill || 1} · Lv.${level}${member.mastery > 0 ? ` · 专${member.mastery}` : ''}</div>
                        ${quickSelectHtml}
                    </div>
                    ${member.mastery > 0 ? `<span class="squad-slot-badge">专${member.mastery}</span>` : ''}
                `;

                // 技能快速切换事件
                const skillContainer = slot.querySelector('.squad-quick-skills');
                if (skillContainer) {
                    skillContainer.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const skillBtn = e.target.closest('.squad-quick-skill');
                        if (!skillBtn) return;
                        const newSkill = parseInt(skillBtn.dataset.skill);
                        squadData[index].skill = newSkill;
                        renderSquad();
                    });
                }

                // 模组快速选择事件
                const moduleSelect = slot.querySelector('.squad-quick-module-select');
                if (moduleSelect) {
                    moduleSelect.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                    moduleSelect.addEventListener('change', (e) => {
                        e.stopPropagation();
                        squadData[index].module = moduleSelect.value || '无';
                        renderSquad();
                    });
                }
            }

            slot.addEventListener('click', (e) => {
                if (e.target.closest('.squad-quick-skills') || e.target.closest('.squad-quick-module-select')) {
                    return;
                }
                if (member) {
                    openConfig(index);
                } else {
                    openSelect(index);
                }
            });

            squadGrid.appendChild(slot);
        });

        updateSummary();
    }

    function removeMember(index) {
        squadData[index] = null;
        saveSquad();
        renderSquad();
    }

    function updateSummary() {
        const members = squadData.filter(Boolean);
        if (squadCount) squadCount.textContent = `${members.length} / 12`;

        if (!members.length) {
            if (squadAvgRarity) squadAvgRarity.textContent = '-';
            if (squadClassDist) squadClassDist.textContent = '-';
            return;
        }

        // 平均星级
        let totalStars = 0;
        const classCount = {};
        members.forEach(m => {
            const op = allOperators.find(o => o.name === m.name);
            if (op) {
                const stars = parseInt((op.rarity || '0').replace('星', '')) || 0;
                totalStars += stars;
                classCount[op.class] = (classCount[op.class] || 0) + 1;
            }
        });
        if (squadAvgRarity) squadAvgRarity.textContent = (totalStars / members.length).toFixed(1) + '星';

        // 职业分布
        const distStr = Object.entries(classCount)
            .sort((a, b) => b[1] - a[1])
            .map(([cls, count]) => `${cls}${count}`)
            .join(' · ');
        if (squadClassDist) squadClassDist.textContent = distStr || '-';
    }

    // ========== 编队分析 ==========
    function getSelectedMembers() {
        return squadData
            .filter(Boolean)
            .map(member => {
                const op = allOperators.find(o => o.name === member.name);
                if (!op) return null;
                const skillData = window.ARKNIGHTS_OPERATOR_SKILLS?.[member.name]?.skills?.[(member.skill || 1) - 1];
                return {
                    ...member,
                    op,
                    rarityNum: parseInt((op.rarity || '0').replace('星', '')) || 0,
                    selectedSkill: skillData || null,
                    skillText: skillData ? [
                        skillData.name,
                        skillData.type,
                        skillData.gain,
                        ...(skillData.rows || []).map(row => row.join(' '))
                    ].join(' ') : ''
                };
            })
            .filter(Boolean);
    }

    function hasAnyText(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    function getMemberText(member) {
        return [
            member.op.class,
            member.op.branch,
            member.op.tags,
            member.op.trait,
            member.skillText
        ].join(' ');
    }

    // 识别有治疗/回复能力的干员（含非医疗职业）
    const HEALING_KEYWORDS = ['治疗', '恢复友方', '回复友方', '生命值', '急救', '药物配置', '回血', '地块回血', '缓慢恢复', '每秒恢复', '同葬无光', '先贤化身', '天马光环', '战斗之歌', '狐火渺然'];
    const HEALING_OPERATOR_NAMES = ['塞雷娅', '黍', '浊心斯卡蒂', '红蒂', '瑕光', '临光', '斑点', '古米', '安洁莉娜', '空', '铃兰'];
    function isHealingOperator(member) {
        if (member.op.class === '医疗') return true;
        const text = getMemberText(member);
        if (hasAnyText(text, HEALING_KEYWORDS)) return true;
        if (HEALING_OPERATOR_NAMES.includes(member.name)) return true;
        return false;
    }

    function buildCapabilityProfile(members) {
        const profile = {
            cost: 0,
            healing: 0,
            antiAir: 0,
            physical: 0,
            arts: 0,
            aoe: 0,
            boss: 0,
            control: 0,
            survival: 0,
            fastRedeploy: 0,
            support: 0,
            summon: 0
        };

        members.forEach(member => {
            const text = getMemberText(member);
            const rarityBonus = member.rarityNum >= 6 ? 1.12 : member.rarityNum >= 5 ? 1.0 : 0.85;
            const masteryBonus = 1 + (member.mastery || 0) * 0.06;
            const moduleBonus = member.module && member.module !== '无' ? 1.06 : 1;
            const weight = rarityBonus * masteryBonus * moduleBonus;

            if (member.op.class === '先锋' || hasAnyText(text, ['费用回复', '部署费用', '获得', '爆费'])) profile.cost += 1.6 * weight;
            if (isHealingOperator(member) || hasAnyText(text, ['治疗', '恢复友方', '回复友方', '生命值'])) profile.healing += 1.7 * weight;
            if (member.op.class === '狙击' || hasAnyText(text, ['优先攻击空中', '空中单位', '对空', '飞行'])) profile.antiAir += 1.4 * weight;
            if (['近卫', '狙击', '重装', '特种', '先锋'].includes(member.op.class) || hasAnyText(text, ['物理伤害', '攻击力'])) profile.physical += 0.9 * weight;
            if (member.op.class === '术师' || hasAnyText(text, ['法术伤害', '法术抗性', '元素损伤', '元素伤害'])) profile.arts += 1.4 * weight;
            if (hasAnyText(text, ['群体', '所有敌人', '范围内', '弹射', '溅射', '同时攻击'])) profile.aoe += 1.1 * weight;
            if (hasAnyText(text, ['爆发', '攻击力', '无视', '真伤', '防御力降低', '法术抗性降低', '脆弱', '易伤', '决战'])) profile.boss += 1.1 * weight;
            if (hasAnyText(text, ['控场', '停顿', '眩晕', '束缚', '冻结', '沉默', '位移', '减速', '睡眠', '浮空'])) profile.control += 1.2 * weight;
            if (member.op.class === '重装' || hasAnyText(text, ['防护', '护盾', '防御力', '法术抗性', '庇护', '阻挡', '不撤退', '回复自身'])) profile.survival += 1.3 * weight;
            if (member.op.class === '特种' || hasAnyText(text, ['快速复活', '再部署时间减少', '撤退', '陷阱'])) profile.fastRedeploy += 0.9 * weight;
            if (member.op.class === '辅助' || hasAnyText(text, ['支援', '削弱', '鼓舞', '脆弱', '召唤物', '战术点', '初始技力'])) profile.support += 1.0 * weight;
            if (hasAnyText(text, ['召唤', '召唤物', '战术点', '装置', '陷阱'])) profile.summon += 0.9 * weight;
        });

        return profile;
    }

    function scoreCapability(value, target) {
        const ratio = value / target;
        if (ratio >= 1) return 82 + Math.min(18, Math.round((ratio - 1) * 15));
        if (ratio >= 0.75) return 52 + Math.round((ratio - 0.75) * 120);
        if (ratio >= 0.5) return 28 + Math.round((ratio - 0.5) * 96);
        if (ratio >= 0.25) return 10 + Math.round((ratio - 0.25) * 72);
        return Math.round(ratio * 40);
    }

    function getScoreLevel(score) {
        if (score >= 82) return '强队';
        if (score >= 64) return '可用但有明显短板';
        if (score >= 44) return '勉强能打，容错很低';
        if (score >= 28) return '结构有硬伤';
        return '不堪一击';
    }

    function getTeamScore(members, profile) {
        if (!members.length) return 0;
        const targets = {
            cost: 4.4,
            healing: 4.1,
            antiAir: 3.8,
            physical: 6.2,
            arts: 4.2,
            aoe: 3.6,
            boss: 4.5,
            control: 3.3,
            survival: 4.4,
            fastRedeploy: 2.1,
            support: 2.8
        };
        const weights = {
            cost: 0.12,
            healing: 0.1,
            antiAir: 0.09,
            physical: 0.1,
            arts: 0.1,
            aoe: 0.08,
            boss: 0.13,
            control: 0.08,
            survival: 0.12,
            fastRedeploy: 0.04,
            support: 0.04
        };
        const weighted = Object.entries(weights).reduce((sum, [key, weight]) => {
            return sum + scoreCapability(profile[key], targets[key]) * weight;
        }, 0);
        const classCount = countBy(members, member => member.op.class);
        const hardPenalty =
            (members.length < 12 ? (12 - members.length) * 3.8 : 0) +
            ((classCount['先锋'] || 0) === 0 ? 10 : 0) +
            (members.filter(m => isHealingOperator(m)).length === 0 ? 9 : 0) +
            ((profile.antiAir < 2.4) ? 7 : 0) +
            ((profile.arts < 2.6) ? 6 : 0) +
            ((profile.survival < 2.8) ? 7 : 0) +
            ((profile.boss < 2.8) ? 6 : 0);
        return Math.max(0, Math.min(100, Math.round(weighted - hardPenalty)));
    }

    function countBy(members, getter) {
        return members.reduce((acc, member) => {
            const key = getter(member) || '未知';
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});
    }

    function topMembersByRole(members, role, limit = 4) {
        const rules = {
            费用启动: ['费用回复', '初始技力', '部署费用', '先锋'],
            主力输出: ['攻击力', '爆发', '物理伤害', '法术伤害', '真伤'],
            生存承压: ['防护', '防御力', '护盾', '庇护', '阻挡', '治疗'],
            控场辅助: ['停顿', '眩晕', '束缚', '减速', '脆弱', '削弱', '支援']
        };
        const keywords = rules[role] || [];
        return members
            .map(member => {
                const text = getMemberText(member);
                const hit = keywords.reduce((sum, keyword) => sum + (text.includes(keyword) ? 1 : 0), 0);
                return { member, hit };
            })
            .filter(item => item.hit > 0)
            .sort((a, b) => b.hit - a.hit || b.member.rarityNum - a.member.rarityNum)
            .slice(0, limit)
            .map(item => item.member.name);
    }

    function recommendOperators(members, needType, limit = 4) {
        const selected = new Set(members.map(member => member.name));
        const rules = {
            cost: op => op.class === '先锋' || (op.tags || '').includes('费用回复'),
            healing: op => op.class === '医疗' || (op.tags || '').includes('治疗'),
            antiAir: op => op.class === '狙击' || (op.trait || '').includes('空中'),
            arts: op => op.class === '术师' || (op.trait || '').includes('法术伤害'),
            survival: op => op.class === '重装' || (op.tags || '').includes('防护'),
            control: op => (op.tags || '').includes('控场') || (op.trait || '').includes('停顿'),
            fastRedeploy: op => (op.tags || '').includes('快速复活') || (op.trait || '').includes('再部署时间减少')
        };
        const predicate = rules[needType];
        if (!predicate) return [];
        return allOperators
            .filter(op => !selected.has(op.name) && predicate(op))
            .sort((a, b) => (parseInt((b.rarity || '0').replace('星', '')) || 0) - (parseInt((a.rarity || '0').replace('星', '')) || 0))
            .slice(0, limit)
            .map(op => op.name);
    }

    function renderList(items) {
        if (!items.length) return '<li>没有值得单独表扬的点，说明这部分表现不突出。</li>';
        return items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    }

    function getAnalysisModes() {
        return [
            {
                key: 'normal',
                label: '普通推图',
                desc: '看重费用、治疗、对空、清杂和基础承压，要求队伍少犯结构错误。',
                targets: { cost: 4.4, healing: 4.1, antiAir: 3.8, physical: 5.6, arts: 4.0, aoe: 3.6, boss: 3.8, control: 2.8, survival: 4.2, fastRedeploy: 1.8, support: 2.4 },
                weights: { cost: 0.15, healing: 0.12, antiAir: 0.11, physical: 0.1, arts: 0.1, aoe: 0.11, boss: 0.08, control: 0.06, survival: 0.13, fastRedeploy: 0.03, support: 0.01 }
            },
            {
                key: 'hard',
                label: '高难/Boss',
                desc: '看重爆发窗口、削弱控场、承压和法伤质量，普通推图能过不代表高难能打。',
                targets: { cost: 4.2, healing: 4.0, antiAir: 3.2, physical: 5.8, arts: 4.8, aoe: 3.0, boss: 5.4, control: 4.2, survival: 4.8, fastRedeploy: 2.2, support: 3.6 },
                weights: { cost: 0.09, healing: 0.09, antiAir: 0.05, physical: 0.11, arts: 0.13, aoe: 0.04, boss: 0.22, control: 0.13, survival: 0.12, fastRedeploy: 0.04, support: 0.08 }
            },
            {
                key: 'annihilation',
                label: '剿灭',
                desc: '看重长线续航、群攻覆盖、对空稳定和挂机容错，爆发强但真空长会被扣分。',
                targets: { cost: 3.8, healing: 4.8, antiAir: 4.4, physical: 5.2, arts: 4.0, aoe: 4.8, boss: 3.2, control: 3.4, survival: 4.8, fastRedeploy: 1.2, support: 2.8 },
                weights: { cost: 0.08, healing: 0.16, antiAir: 0.14, physical: 0.08, arts: 0.09, aoe: 0.17, boss: 0.04, control: 0.09, survival: 0.13, fastRedeploy: 0.01, support: 0.01 }
            },
            {
                key: 'roguelike',
                label: '肉鸽',
                desc: '看重单卡独立性、低费展开、救场能力和职业覆盖，太依赖固定组合会被扣分。',
                targets: { cost: 4.2, healing: 3.6, antiAir: 3.4, physical: 5.0, arts: 3.8, aoe: 3.2, boss: 3.8, control: 3.4, survival: 3.8, fastRedeploy: 2.8, support: 3.0 },
                weights: { cost: 0.14, healing: 0.08, antiAir: 0.08, physical: 0.1, arts: 0.09, aoe: 0.08, boss: 0.1, control: 0.1, survival: 0.09, fastRedeploy: 0.09, support: 0.05 }
            },
            {
                key: 'newbie',
                label: '新手低练',
                desc: '看重低练可用、操作简单、费用和治疗稳定。高星多不等于低练友好。',
                targets: { cost: 4.0, healing: 4.0, antiAir: 3.5, physical: 4.8, arts: 3.6, aoe: 3.2, boss: 3.0, control: 2.4, survival: 4.2, fastRedeploy: 1.4, support: 1.8 },
                weights: { cost: 0.15, healing: 0.14, antiAir: 0.1, physical: 0.1, arts: 0.09, aoe: 0.09, boss: 0.06, control: 0.05, survival: 0.15, fastRedeploy: 0.03, support: 0.04 }
            }
        ];
    }

    function calculateModeScore(members, profile, mode, classCount, avgRarityNum) {
        const weighted = Object.entries(mode.weights).reduce((sum, [key, weight]) => {
            return sum + scoreCapability(profile[key], mode.targets[key]) * weight;
        }, 0);
        let penalty = members.length < 12 ? (12 - members.length) * 4.5 : 0;
        if ((classCount['先锋'] || 0) === 0) penalty += mode.key === 'hard' ? 9 : 13;
        if (members.filter(m => isHealingOperator(m)).length === 0) penalty += mode.key === 'roguelike' ? 8 : 12;
        if (profile.antiAir < mode.targets.antiAir * 0.62) penalty += mode.key === 'annihilation' ? 12 : 9;
        if (profile.arts < mode.targets.arts * 0.62) penalty += mode.key === 'hard' ? 11 : 8;
        if (profile.survival < mode.targets.survival * 0.62) penalty += 10;
        if (profile.boss < mode.targets.boss * 0.62 && mode.key === 'hard') penalty += 14;
        if (mode.key === 'newbie' && avgRarityNum >= 5.4) penalty += 8;
        if (mode.key === 'roguelike' && Object.keys(classCount).length < 5) penalty += 9;
        // 额外扣分：职业过于偏科
        const totalOps = members.length;
        const singleClassMax = Math.max(...Object.values(classCount), 0);
        if (totalOps >= 6 && singleClassMax / totalOps > 0.5) penalty += 5;
        // 额外扣分：完全没有对空手段
        if (profile.antiAir < 0.5) penalty += 6;
        // 额外扣分：没有控场也没有快活
        if (profile.control < 0.5 && profile.fastRedeploy < 0.5) penalty += 4;
        return Math.max(0, Math.min(100, Math.round(weighted - penalty)));
    }

    function buildModeAssessment(mode, members, profile, classCount, avgRarityNum) {
        const t = mode.targets;
        const strengths = [];
        const risks = [];
        const suggestions = [];

        const addBasicRisks = () => {
            if ((classCount['先锋'] || 0) === 0) risks.push('硬伤：没有先锋，开局节奏靠硬等费用，前压图会非常难看。');
            if (members.filter(m => isHealingOperator(m)).length === 0) risks.push('硬伤：没有治疗手段，除非全队靠速杀和自回血，否则容错率接近于零。');
            if (members.length < 12) risks.push(`编队未满：当前只有${members.length}人，少一个位置就是少一层保险，不要拿"灵活"当借口。`);
        };

        // 职业偏科检测
        const totalOps = members.length;
        const classEntries = Object.entries(classCount).sort((a, b) => b[1] - a[1]);
        if (totalOps >= 6 && classEntries.length > 0) {
            const maxClass = classEntries[0];
            const maxRatio = maxClass[1] / totalOps;
            if (maxRatio > 0.5) {
                risks.push(`职业严重偏科：${maxClass[0]}占了${maxClass[1]}人（超过半数），队伍应变能力很差。`);
                suggestions.push(`削减${maxClass[0]}数量，补其他职业。一队12人同一职业超过6个就是自废武功。`);
            }
            if (classEntries.length < 4 && totalOps >= 8) {
                risks.push(`职业覆盖太窄：只有${classEntries.length}个职业，遇到职业限制或针对性关卡会直接坐牢。`);
            }
        }

        // 同职业重复检测
        const branchEntries = Object.entries(
            members.reduce((acc, m) => { const b = m.op.branch || '未知'; acc[b] = (acc[b] || 0) + 1; return acc; }, {})
        ).sort((a, b) => b[1] - a[1]);
        const dupBranches = branchEntries.filter(([_, count]) => count >= 3);
        if (dupBranches.length > 0) {
            risks.push(`分支严重重叠：${dupBranches.map(([b, c]) => `${b}×${c}`).join('、')}，同分支干员超过2个通常是在浪费位置。`);
            suggestions.push(`削减重复分支，腾出位置给不同机制的干员。`);
        }

        // 配置问题检测
        const noMasteryCount = members.filter(m => !m.mastery || m.mastery === 0).length;
        const sixStarCount = members.filter(m => m.rarityNum >= 6).length;
        if (sixStarCount >= 4 && noMasteryCount >= 3) {
            risks.push(`高星多但专精为零：有${sixStarCount}个六星，其中${noMasteryCount}个没专精。六星不专精等于白养，技能提升幅度极大。`);
            suggestions.push('先把核心六星的专精拉起来，不要平均分配资源。');
        }
        const noModuleSix = members.filter(m => m.rarityNum >= 6 && (!m.module || m.module === '无')).length;
        if (noModuleSix >= 3 && sixStarCount >= 4) {
            risks.push(`六星模组覆盖率低：${noModuleSix}个六星没装模组。模组对六星的提升不可忽视，尤其是关键干员。`);
        }

        // 技能选择问题
        const skillIssueMembers = members.filter(m => {
            if (!m.selectedSkill || !m.selectedSkill.rows) return false;
            const rows = m.selectedSkill.rows;
            if (rows.length < 7) return false;
            const row1 = rows[0];
            const row7 = rows[6];
            if (!row1 || !row7) return false;
            // 如果专精了但技能等级数据里没体现
            if (m.mastery >= 2 && m.selectedSkill.rows.length < 10) return true;
            return false;
        });

        // 费用
        if (profile.cost >= t.cost) {
            if (profile.cost >= t.cost * 1.2) strengths.push('费用启动优秀，展开速度不会成为瓶颈。');
            else strengths.push('费用启动达到该模式最低要求。');
        } else {
            risks.push(mode.key === 'hard' ? '费用不足会直接压缩决战技部署窗口，Boss还没进斩杀线你可能已经漏怪。' : '费用启动不达标，前期下人慢，后续所有部署都会被连锁拖慢。');
            suggestions.push(`先补费用回复，不要再堆慢启动大核：${recommendOperators(members, 'cost').join('、') || '桃金娘、极境、琴柳等'}。`);
        }

        // 治疗
        if (profile.healing >= t.healing) {
            if (profile.healing >= t.healing * 1.3) strengths.push('治疗线很厚，长线图有较高容错。');
            else strengths.push('治疗续航勉强达标，但只是"不会死人"的水平。');
        } else if (profile.healing >= t.healing * 0.6) {
            risks.push('治疗处于灰色地带：不至于立刻崩，但高压图或持续掉血时会被磨穿。');
            suggestions.push(`建议补一个稳定治疗，不要赌操作：${recommendOperators(members, 'healing').join('、') || '单奶、群奶、元素奶'}。`);
        } else {
            risks.push(mode.key === 'annihilation' ? '剿灭里治疗不足是慢性死亡，前200杀看不出来，后面会被连续波次磨穿。' : '治疗严重不足：前排承压变成赌博，远程点名或持续掉血图会直接崩。');
            suggestions.push(`必须补医疗，这不是可选项：${recommendOperators(members, 'healing').join('、') || '单奶、群奶、元素奶'}。`);
        }

        // 对空
        if (profile.antiAir >= t.antiAir) {
            strengths.push('对空覆盖达到该模式要求。');
        } else if (profile.antiAir < t.antiAir * 0.4) {
            risks.push('对空几乎为零：飞行单位会直接漏过去，这不是"打得慢"的问题，是"完全打不了"。');
            suggestions.push(`必须补对空，没有任何商量的余地：${recommendOperators(members, 'antiAir').join('、') || '速射手或强力对空狙击'}。`);
        } else {
            risks.push(mode.key === 'annihilation' ? '剿灭对空不够就是硬伤，无人机波次会直接暴露队伍缺陷。' : '对空不足，遇到飞行单位不是打得慢，而是会直接漏。');
            suggestions.push(`补稳定对空位：${recommendOperators(members, 'antiAir').join('、') || '速射手或强力对空狙击'}。`);
        }

        // 法伤
        if (profile.arts >= t.arts) {
            strengths.push('法伤/元素输出够用，高防单位不至于完全卡住。');
        } else if (profile.arts < t.arts * 0.4) {
            risks.push('法伤严重缺失：高防敌人会把这队的输出质量打回原形，物理队最怕的就是高防+高法抗组合。');
            suggestions.push(`必须补法伤或元素伤害：${recommendOperators(members, 'arts').join('、') || '术师、法伤近卫、元素输出'}。`);
        } else {
            risks.push(mode.key === 'hard' ? '高难缺法伤会非常致命，高防精英怪会把物理输出拖进技能真空期。' : '法伤不足，遇到高防敌人会明显刮痧。');
            suggestions.push(`补法伤或元素伤害：${recommendOperators(members, 'arts').join('、') || '术师、法伤近卫、元素输出'}。`);
        }

        // 群攻
        if (profile.aoe >= t.aoe) {
            strengths.push('清杂能力合格，多目标推进时不容易被数量压垮。');
        } else {
            risks.push(mode.key === 'annihilation' ? '剿灭清杂不足会很丑，敌人不是一个个漏，而是一波把阻挡位挤爆。' : '群攻不足，杂兵海会拖垮阻挡和治疗。');
            suggestions.push('补群攻或范围输出，不要只带单体大核。');
        }

        // Boss处理
        if (profile.boss >= t.boss) {
            if (mode.key === 'hard' && profile.boss >= t.boss * 1.3) strengths.push('高难Boss处理储备充足，有明确的决战和削弱手段。');
            else strengths.push('Boss/精英怪处理能力达到该模式要求。');
        } else if (profile.boss < t.boss * 0.4) {
            risks.push('Boss处理几乎为零：没有爆发窗口、没有削弱手段，碰到高血量精英只能看它走进门。');
            suggestions.push('必须补决战技、削弱或强爆发角色，否则别指望打Boss。');
        } else {
            risks.push(mode.key === 'hard' ? '高难Boss处理不合格：缺爆发、缺削弱、缺控制，最后只能看Boss走进门。' : '精英怪处理偏弱，遇到高血量目标会拖节奏。');
            suggestions.push('补决战技、削弱、脆弱或强爆发角色，别指望常规输出慢慢磨死Boss。');
        }

        // 控场
        if (profile.control >= t.control) {
            strengths.push('控场资源合格，可以主动拖节奏。');
        } else if (profile.control < 0.5 && profile.fastRedeploy < 0.5) {
            risks.push('既没有控场也没有快活：高压波次只能硬吃，漏怪了也救不回来。');
            suggestions.push('至少补一个控场或快活，否则高压图没有任何补救手段。');
        } else {
            risks.push(mode.key === 'hard' ? '控场不足，高压波只能硬接，没有打断和拖时间手段。' : '控场偏少，漏怪和高压波次的补救空间不足。');
            suggestions.push(`补控场/削弱：${recommendOperators(members, 'control').join('、') || '减速、停顿、眩晕、脆弱辅助'}。`);
        }

        // 承压
        if (profile.survival >= t.survival) {
            strengths.push('承压能力达到该模式要求，有人能站住关键路口。');
        } else if (profile.survival < t.survival * 0.5) {
            risks.push('承压严重不足：关键路口根本站不住人，输出再高也没用——前排一倒就全盘崩。');
            suggestions.push(`必须补真正能扛线的角色：${recommendOperators(members, 'survival').join('、') || '重装、自回血近卫、守护者'}。`);
        } else {
            risks.push('承压不达标：关键路口站不住，输出再高也会被迫提前开技能救场。');
            suggestions.push(`补真正能扛线的角色：${recommendOperators(members, 'survival').join('、') || '重装、自回血近卫、守护者'}。`);
        }

        // 模式特殊检测
        if (mode.key === 'roguelike') {
            if (profile.fastRedeploy >= t.fastRedeploy) strengths.push('机动救场能力不错，肉鸽里能处理突发漏怪。');
            else {
                risks.push('肉鸽缺救场位很危险，临时招募和地图未知会放大这个问题。');
                suggestions.push(`补快活/陷阱/位移类救场：${recommendOperators(members, 'fastRedeploy').join('、') || '砾、红、傀影、缄默德克萨斯等'}。`);
            }
            if (Object.keys(classCount).length < 5) risks.push('职业覆盖太窄，肉鸽拿到限制或藏品偏科时会很被动。');
            if (sixStarCount > 8) risks.push('肉鸽里六星太多不是好事，抽不到核心就是等死，低星泛用干员反而更可靠。');
        }

        if (mode.key === 'newbie') {
            if (avgRarityNum >= 5.4) risks.push('新手低练视角下，这队养成压力偏大。高星多不是问题，但全靠高星会卡资源。');
            if (profile.control >= t.control) strengths.push('有一定控场，低练时能用拖时间弥补输出不足。');
            if (sixStarCount > 6) suggestions.push('低练阶段不要贪多，集中资源练好4~5个核心比平均练12个更有用。');
            else suggestions.push('低练优先保证先锋、医疗、一个稳定对空和一个能扛线的前排，不要平均乱练。');
        }

        if (mode.key === 'annihilation') {
            if (profile.healing < t.healing * 0.8) risks.push('剿灭图治疗不够就是硬伤，400杀以后你会深刻理解什么叫"慢性死亡"。');
            if (profile.aoe < t.aoe * 0.7) risks.push('剿灭群攻不够会很难受，后期敌人密度会让单体输出完全来不及清。');
            if (profile.fastRedeploy < 0.5) risks.push('剿灭没有快活/救场位，后期压力上来后漏一个就是连锁崩。');
        }

        if (mode.key === 'hard') {
            if (profile.boss < t.boss * 0.6) risks.push('高难模式下Boss处理是核心能力。你这个水平打Boss基本等于刮痧等死。');
            if (profile.support < t.support * 0.5) risks.push('高难缺辅助/削弱会让输出效率大幅下降，没有脆弱和增伤，决战窗口会非常短。');
            if (profile.survival < t.survival * 0.6) risks.push('高难承压不足是致命的：高压路不是"少放一个重装"的问题，是根本扛不住。');
        }

        addBasicRisks();

        // 即使达标也要挑毛病
        if (risks.length === 0 && strengths.length > 0) {
            if (profile.cost < t.cost * 1.3) risks.push('费用启动刚过线，碰到开局高压图还是会紧。');
            if (profile.healing < t.healing * 1.3) risks.push('治疗刚过线，多路承压或持续掉血图可能会吃力。');
            if (profile.physical < t.physical * 1.2) risks.push('物理输出不算富裕，碰到高防+法抗组合时可能会哑火。');
            if (profile.control < t.control * 1.2) risks.push('控场刚过线，高压波次的容错余量不大。');
        }

        return { strengths, risks, suggestions };
    }

    // ========== 打法演示：开局/中期/后期的具体操作建议 ==========
    function buildPlaybook(mode, members, profile, classCount) {
        const costOps = members.filter(m => {
            const t = getMemberText(m);
            return m.op.class === '先锋' || hasAnyText(t, ['费用回复', '部署费用']);
        });
        const healOps = members.filter(m => isHealingOperator(m));
        const tankOps = members.filter(m => m.op.class === '重装' || hasAnyText(getMemberText(m), ['防护', '护盾', '阻挡']));
        const dpsOps = members.filter(m => ['近卫', '狙击', '术师', '特种'].includes(m.op.class));
        const supportOps = members.filter(m => m.op.class === '辅助');
        const specialOps = members.filter(m => m.op.class === '特种');
        const costNames = costOps.map(m => m.name).join('、') || '无先锋';
        const healNames = healOps.map(m => m.name).join('、') || '无治疗';
        const tankNames = tankOps.map(m => m.name).join('、') || '无重装';
        const dpsNames = dpsOps.slice(0, 3).map(m => m.name).join('、') || '无输出';
        const supportNames = supportOps.map(m => m.name).join('、') || '无辅助';
        const hasFastRedeploy = specialOps.length > 0;

        const phases = [];

        // 开局阶段
        const opening = [];
        if (costOps.length > 0) {
            opening.push(`第一步：部署 ${costNames} 开局产费`);
            if (costOps.length >= 2) opening.push(`由于有${costOps.length}个费用位，开局可以连续下${costOps.slice(0, 2).map(m => m.name).join('和')}，快速积累初始费用`);
        } else {
            opening.push('开局没有费用回复先锋，只能等自然回复费用，前期会非常被动');
        }
        if (tankOps.length > 0 && costOps.length > 0) {
            opening.push(`等费用到${tankOps.length > 1 ? '10~12' : '9~10'}左右时部署 ${tankNames} 承压`);
        }
        if (healOps.length > 0) {
            opening.push(`在阻挡位部署后紧跟 ${healNames} 保证血线`);
        }
        if (opening.length === 0) opening.push('注意初始站位和费用节奏');

        // 中期阶段
        const mid = [];
        if (dpsOps.length > 0) {
            mid.push(`费用稳定后部署核心输出 ${dpsNames}`);
            const autoDps = dpsOps.filter(m => { const t = getMemberText(m); return hasAnyText(t, ['自动触发', '自动回复']); });
            const manualDps = dpsOps.filter(m => { const t = getMemberText(m); return hasAnyText(t, ['手动触发']); });
            if (autoDps.length > 0) mid.push(`${autoDps.map(m => m.name).join('、')}是自动技能，挂机时优先部署`);
            if (manualDps.length > 0) mid.push(`${manualDps.map(m => m.name).join('、')}是手动技能，注意技力回转后及时开启`);
        }
        if (supportOps.length > 0) {
            mid.push(`辅助 ${supportNames} 根据技能类型决定部署时机：如果是拐，和主力输出同步开启；如果是控制，在敌人出现前开启`);
        }
        if (profile.aoe >= 3) {
            mid.push('中期杂兵波次增多，注意群攻技能的覆盖，不要在同一时间开启多个短CD技能');
        } else {
            mid.push('中期缺少群攻，杂兵需要手动切目标清理，操作要求较高');
        }
        if (profile.control >= 3) {
            mid.push('有控场手段，中期可以主动控住精英怪让输出打一套再松开');
        }
        if (hasFastRedeploy) {
            mid.push(`快活 ${specialOps.map(m => m.name).join('、')} 留作救场，漏怪时立刻下位置挡一刀`);
        }

        // 后期阶段
        const late = [];
        if (mode.key === 'annihilation') {
            late.push('剿灭后期敌人密度极大，核心输出技能保持轮流覆盖，不要同时开完');
            late.push('治疗压力持续增大，确保至少有一个治疗技能在冷却中随时可用');
            if (profile.antiAir >= 3) late.push('后期飞行单位增多，保留对空干员的技能处理无人机波次');
        } else if (mode.key === 'hard') {
            late.push('高难后期Boss技能需要注意规避：Boss开大时撤退高压位，技能结束后重新部署');
            late.push('决战窗口：先上削弱/脆弱拐，再开主C技能，最后补控制拖延');
            if (profile.boss >= 5) late.push('Boss处理能力足够，可以尝试单核速杀路线');
            else late.push('Boss处理偏弱，需要多轮技能覆盖打消耗战，注意控制回转');
        } else if (mode.key === 'roguelike') {
            late.push('肉鸽后期靠藏品和临时招募补强，编队内干员注意保持血量');
            late.push(' Boss层优先用快活吃技能，然后主C开大一波带走');
        } else {
            late.push('后期主力技能保持轮流覆盖，避免真空期被突破');
            late.push('注意预留至少一个干员的技能应对突发情况');
            if (profile.survival >= 4) late.push('承压足够，后期可以稳扎稳打');
            else late.push('后期承压紧张，注意及时撤退残血压位，避免被一波打穿');
        }

        // 通用技巧
        const tips = [];
        if (costOps.filter(m => m.op.branch === '执旗手').length > 0) tips.push('执旗手只负责产费，不要指望输出，技能好了就开');
        if (costOps.filter(m => m.op.branch === '冲锋手').length > 0) tips.push('冲锋手可以击杀回费，开局如果侧面有落单怪可以击杀回费加速启动');
        if (members.some(m => hasAnyText(getMemberText(m), ['再部署时间减少']))) tips.push('再部署减少的干员可以反复吃Boss技能或试探路线，容错极高');
        if (members.some(m => hasAnyText(getMemberText(m), ['停顿', '眩晕']))) tips.push('控制和快活配合：先控制再切后排，操作顺序不要反');

        return `
            <div class="playbook-phase">
                <div class="playbook-phase-title">开局（0~30费）</div>
                <ol>${opening.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
            </div>
            <div class="playbook-phase">
                <div class="playbook-phase-title">中期（费用稳定~主力就位）</div>
                <ol>${mid.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
            </div>
            <div class="playbook-phase">
                <div class="playbook-phase-title">后期（高压波次/Boss阶段）</div>
                <ol>${late.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
            </div>
            ${tips.length ? `<div class="playbook-phase playbook-tips"><div class="playbook-phase-title">操作技巧</div><ul>${tips.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul></div>` : ''}
        `;
    }

    // ========== 建议改动：具体替换和调整方案 ==========
    function buildAdjustSuggestion(mode, members, profile, classCount) {
        const adjustments = [];
        const totalOps = members.length;
        const classEntries = Object.entries(classCount).sort((a, b) => b[1] - a[1]);

        // 职业偏科修正
        if (totalOps >= 6) {
            const maxClass = classEntries[0];
            if (maxClass && maxClass[1] / totalOps > 0.5) {
                adjustments.push({
                    type: 'remove',
                    title: `削减${maxClass[0]}数量`,
                    desc: `当前${maxClass[0]}占了${maxClass[1]}人，过多同职业干员功能重叠。建议保留最强的1~2个${maxClass[0]}，其余替换为其他职业。`,
                    impact: '高'
                });
            }
        }

        // 先锋检查
        const vanguards = members.filter(m => m.op.class === '先锋');
        const costVanguards = vanguards.filter(m => m.op.branch === '执旗手' || hasAnyText(getMemberText(m), ['费用回复']));
        if (costVanguards.length === 0 && vanguards.length > 0) {
            adjustments.push({
                type: 'replace',
                title: '先锋缺少费用回复',
                desc: `当前先锋${vanguards.map(m => m.name).join('、')}没有稳定费用回复。建议把其中至少一个替换为桃金娘、极境或琴柳等执旗手/冲锋手。`,
                impact: '高'
            });
        }
        if (vanguards.length === 0) {
            adjustments.push({
                type: 'add',
                title: '必须补充先锋',
                desc: '没有先锋开局就是等死。最低要求带一个桃金娘（4星就够了）。',
                impact: '致命'
            });
        }

        // 治疗检查（含非医疗治疗干员如塞雷娅、黍、红蒂等）
        const healers = members.filter(m => isHealingOperator(m));
        if (healers.length === 0) {
            adjustments.push({
                type: 'add',
                title: '必须补充治疗手段',
                desc: '没有治疗意味着前排全靠自回血和硬吃，容错率极低。建议至少带一个医疗或奶盾（如塞雷娅、黍）。',
                impact: '致命'
            });
        } else if (healers.length === 1 && totalOps >= 10) {
            adjustments.push({
                type: 'add',
                title: '建议补充第二个治疗',
                desc: `只有一个${healers[0].name}提供治疗，如果她技能在冷却或被控制，前排直接裸奔。建议补一个不同机制的治疗（比如单奶+群奶组合，或奶盾+医疗组合）。`,
                impact: '中'
            });
        }

        // 对空检查
        const antiAirOps = members.filter(m => {
            return m.op.class === '狙击' || hasAnyText(getMemberText(m), ['优先攻击空中', '飞行', '对空']);
        });
        if (antiAirOps.length === 0) {
            adjustments.push({
                type: 'add',
                title: '必须补对空',
                desc: '完全没有对空手段，飞行单位会直接漏过去。建议带一个速射手（如克洛丝/蓝毒/能天使）。',
                impact: '致命'
            });
        } else if (profile.antiAir < 2) {
            adjustments.push({
                type: 'replace',
                title: '对空位偏弱',
                desc: `当前对空主要靠${antiAirOps.map(m => m.name).join('、')}，如果他们技能在冷却或被压血，对空会出现真空期。建议确保至少一个对空干员有自动技能。`,
                impact: '中'
            });
        }

        // 法伤检查
        const artsOps = members.filter(m => {
            return m.op.class === '术师' || hasAnyText(getMemberText(m), ['法术伤害', '元素损伤']);
        });
        if (artsOps.length === 0) {
            adjustments.push({
                type: 'add',
                title: '建议补法伤',
                desc: '完全没有法术/元素伤害，遇到高防敌人会被完全卡住。建议至少带一个术师或法伤近卫。',
                impact: '高'
            });
        }

        // 承压检查
        if (profile.survival < 3) {
            adjustments.push({
                type: 'add',
                title: '承压位不足',
                desc: '当前队伍缺少能稳定扛线的角色。建议补一个重装或高防御近卫。',
                impact: '高'
            });
        }

        // Boss处理检查
        if (mode.key === 'hard' && profile.boss < 3) {
            adjustments.push({
                type: 'add',
                title: 'Boss处理必须补强',
                desc: '高难模式下没有Boss处理能力等于送分。建议补决战技（如银灰S3、史尔特尔S2、假日威龙陈S3）或削弱拐（如铃兰S3、巫恋S2）。',
                impact: '致命'
            });
        }

        // 快活/特种检查
        if (profile.fastRedeploy < 1 && profile.control < 1) {
            adjustments.push({
                type: 'add',
                title: '建议补快活或控制',
                desc: '既没有快速复活也没有控场，高压波次完全只能硬吃。建议至少带一个快活（砾/红）或控制辅助。',
                impact: '中'
            });
        }

        // 专精建议
        const noMasterySix = members.filter(m => m.rarityNum >= 6 && (!m.mastery || m.mastery === 0));
        if (noMasterySix.length >= 2) {
            adjustments.push({
                type: 'upgrade',
                title: '六星专精优先级',
                desc: `${noMasterySix.map(m => m.name).join('、')}没有专精。六星不专精等于白养，建议优先专精核心输出和治疗的关键技能。不要平均分配资源。`,
                impact: '中'
            });
        }

        // 模组建议
        const noModuleSix = members.filter(m => m.rarityNum >= 6 && (!m.module || m.module === '无'));
        if (noModuleSix.length >= 3) {
            adjustments.push({
                type: 'upgrade',
                title: '六星模组覆盖',
                desc: `${noModuleSix.slice(0, 3).map(m => m.name).join('、')}没有装备模组。模组对六星的提升不可忽视，尤其是核心干员优先装模组。`,
                impact: '低'
            });
        }

        // 低星浪费位置检查（高难模式）
        if (mode.key === 'hard') {
            const lowStarInHard = members.filter(m => m.rarityNum <= 3);
            if (lowStarInHard.length >= 2) {
                adjustments.push({
                    type: 'replace',
                    title: '高难模式低星干员偏多',
                    desc: `${lowStarInHard.map(m => m.name).join('、')}在${mode.label}中上限较低。建议替换为对应位置的高星上位。`,
                    impact: '中'
                });
            }
        }

        // 如果没有任何改动建议
        if (adjustments.length === 0) {
            adjustments.push({
                type: 'good',
                title: '当前编队结构合理',
                desc: '职业覆盖完整，没有明显短板，不需要结构性改动。继续优化技能专精和模组即可。',
                impact: '无'
            });
        }

        const impactColors = { '致命': '#f87171', '高': '#fb923c', '中': '#fbbf24', '低': '#a3e635', '无': '#4ade80' };

        return `<div class="adjust-list">${adjustments.map(a => `
            <div class="adjust-item adjust-item-${a.type}">
                <div class="adjust-item-header">
                    <span class="adjust-item-type">${({ add: '补位', replace: '替换', remove: '削减', upgrade: '养成', good: '确认' })[a.type]}</span>
                    <span class="adjust-item-title">${escapeHtml(a.title)}</span>
                    <span class="adjust-item-impact" style="color:${impactColors[a.impact] || '#fff'}">${escapeHtml(a.impact)}</span>
                </div>
                <div class="adjust-item-desc">${escapeHtml(a.desc)}</div>
            </div>
        `).join('')}</div>`;
    }

    // ========== 技能搭配推荐数据库（基于社区攻略共识）==========
    const SKILL_RECOMMENDATIONS = {
        '银灰': { bestSkill: 3, recMastery: 3, reason: '真银斩是银灰核心技能，专三后覆盖面和伤害质变，高难推图必备。', skill2: '2技能强力击适合前期清杂，但不建议专精。' },
        '陈': { bestSkill: 2, recMastery: 3, reason: '赤霄·拔刀短CD高爆发，专三伤害和回转质变，落地秒杀精英怪。', skill3: '3技能呵斥体系核心，配合攻回干员有奇效，但使用门槛高。' },
        '能天使': { bestSkill: 3, recMastery: 3, reason: '过载模式专三后五连射爆发极高，对单DPS天花板之一。', skill2: '2技能自动触发适合挂机，但上限不如3技能。' },
        '艾雅法拉': { bestSkill: 2, recMastery: 3, reason: '点燃群体法伤+持续灼烧，专三伤害和覆盖面质变，清杂和打boss两用。', skill3: '3技能炸裂单发伤害高但CD长，更适合打boss。' },
        '伊芙利特': { bestSkill: 2, recMastery: 3, reason: '2技能大范围持续法伤+削弱，专三覆盖面和伤害量提升巨大。' },
        '星熊': { bestSkill: 3, recMastery: 3, reason: '3技能物理盾+反伤+群体减伤，专三后承压质变，高难重装首选。', skill2: '2技能法伤反击打小怪舒服但不适合高压。' },
        '推进之王': { bestSkill: 2, recMastery: 3, reason: '跃空锤爆费+输出兼备，专三后cost产出和伤害都提升。' },
        '风笛': { bestSkill: 3, recMastery: 3, reason: '闭膛连发三连击+高攻，专三后爆发和回转都是先锋天花板。', skill2: '2技能高效冲击适合速杀，但通用性不如3技能。' },
        '塞雷娅': { bestSkill: 2, recMastery: 3, reason: '2技能急救提供巨额单次治疗+物理盾，专三后奶量爆表，救人神器。', skill1: '1技能自动回复适合挂机，但上限低。', skill3: '3技能提供法伤+减攻击力，对策技。' },
        '夜莺': { bestSkill: 2, recMastery: 3, reason: '2技能群体法抗盾+净化，专三覆盖面和持续时间质变，法伤关卡核心医疗。', skill3: '3技能复活+神明化防秒杀，极高风险对策技。' },
        '闪灵': { bestSkill: 2, recMastery: 3, reason: '2技能单体奶+净化debuff，专三奶量提升大，对单奶天花板。' },
        '赫拉格': { bestSkill: 3, recMastery: 1, reason: '3技能和解技提供格挡+攻速，专一即可获得关键格挡能力。专三收益一般。', skill2: '2技能自回血站场能力强，适合长线图。' },
        '史尔特尔': { bestSkill: 2, recMastery: 3, reason: '2技能火山纯真伤大范围爆发，专三伤害和持续时间质变，秒杀一切。' },
        '棘刺': { bestSkill: 3, recMastery: 3, reason: '3技能至高之术持续大范围法伤，专三后伤害和覆盖率质变，挂机清图核心。' },
        '玛恩纳': { bestSkill: 3, recMastery: 3, reason: '3技能决意如山范围大+高攻+减益清除，专三后攻防一体的神技。', skill2: '2技能自动回复适合前期过渡。' },
        '泥岩': { bestSkill: 2, recMastery: 3, reason: '2技能超高护盾+自回血，专三后承压能力极强，法伤关卡重装首选。' },
        '迷迭香': { bestSkill: 3, recMastery: 3, reason: '3技能异格重力拉扯+群体伤害，专三控制范围和伤害质变。' },
        '黑': { bestSkill: 3, recMastery: 3, reason: '3技能近距离射击超高爆发，专三伤害质变，开罐头和打boss利器。' },
        'W': { bestSkill: 3, recMastery: 3, reason: '3技能D32高爆范围大+真伤+减速，专三伤害和控制效果质变。' },
        '傀影': { bestSkill: 3, recMastery: 3, reason: '3技能真假身替身+爆发，专三后伤害和本体存活时间提升。' },
        '缄默德克萨斯': { bestSkill: 3, recMastery: 3, reason: '3技能锁血+沉默+高额爆发，专三后救场和输出质变。' },
        '琴柳': { bestSkill: 1, recMastery: 3, reason: '1技能梧桐速攻爆发+爆费，专三cost产出高，费用启动核心。', skill2: '2技能支援号令群体增益，拐前锋体系好用。' },
        '极境': { bestSkill: 2, recMastery: 3, reason: '2技能聆听提供狙击拐+爆费，专三拐力提升。', skill1: '1技能费用回复稳定但不带拐。' },
        '桃金娘': { bestSkill: 1, recMastery: 1, reason: '1技能自动回复爆费极稳定，专一即可满足需求，性价比极高。' },
        '蓝毒': { bestSkill: 2, recMastery: 1, reason: '2技能毒液扩散弹射伤害提升大，专一质变，五星性价比之王。' },
        '拉普兰德': { bestSkill: 2, recMastery: 3, reason: '2技能狼魂沉默+群体法伤，专三伤害和持续时间提升，对策技核心。' },
        '白面鸮': { bestSkill: 2, recMastery: 3, reason: '2技能脑啡肽群体技力回复，专三技力回复量提升，拐医疗体系核心。' },
        '华法林': { bestSkill: 2, recMastery: 3, reason: '2技能不稳定血浆增伤拐，专三拐力质变，输出队必备拐。', skill1: '1技能急救奶也不错，但作为拐才是华法林的核心定位。' },
        '红': { bestSkill: 2, recMastery: 3, reason: '2技能处决者技能冷却短+眩晕，专三回转加快，救场清杂万能快活。' },
        '砾': { bestSkill: 2, recMastery: 1, reason: '2技能尖刺防御减伤+自爆，专一即可用于挡刀吃技能。' },
        '煌': { bestSkill: 2, recMastery: 3, reason: '2技能链锯挥砍大范围持续物理输出，专三伤害和攻速质变，清杂打boss两用。' },
        '山': { bestSkill: 2, recMastery: 3, reason: '2技能崩坏之法大范围真伤爆发，专三伤害和覆盖面质变。' },
        '棘刺': { bestSkill: 3, recMastery: 3, reason: '3技能至高之术持续大范围法伤，专三后挂机清图核心。' },
        '麦哲伦': { bestSkill: 3, recMastery: 3, reason: '3技能思维加速大范围减速+召唤物增援，专三覆盖面和控制质变。' },
        '铃兰': { bestSkill: 3, recMastery: 3, reason: '3技能深海低语巨额脆弱拐+法伤，专三拐力质变，辅助天花板。' },
        '浊心斯卡蒂': { bestSkill: 2, recMastery: 3, reason: '2技能同调者群体攻击力提升+范围治疗，专三拐力和治疗量质变。' },
        '灵知': { bestSkill: 2, recMastery: 3, reason: '2技能群体冻结+法伤，专三冻结持续时间和伤害质变。' },
        '仇白': { bestSkill: 3, recMastery: 3, reason: '3技能大范围减速+群体法伤，专三伤害和控制效果质变。' },
        '维什戴尔': { bestSkill: 3, recMastery: 3, reason: '3技能大范围三连射+攻回，专三伤害和回转质变。' },
        '提丰': { bestSkill: 3, recMastery: 3, reason: '3技能蓄力大范围真伤爆发，专三伤害质变，boss杀手。' },
        '年': { bestSkill: 2, recMastery: 3, reason: '2技能铁御超大范围护盾+反伤，专三承压和反击伤害质变。' },
        '森蚺': { bestSkill: 2, recMastery: 3, reason: '2技能大范围法伤+束缚，专三伤害和控制效果提升。' },
        '黍': { bestSkill: 1, recMastery: 3, reason: '1技能自动回复护盾+治疗，专三后持续承压能力极强。' },
        '耀骑士临光': { bestSkill: 3, recMastery: 3, reason: '3技能巨额爆发+真伤+破甲线，专三伤害质变，决战近卫天花板。' },
        '号角': { bestSkill: 2, recMastery: 3, reason: '2技能远程嘲讽+护盾+法伤，专三承压和输出质变。' },
        '圣约送葬人': { bestSkill: 3, recMastery: 3, reason: '3技能巨额物理爆发+斩杀，专三伤害质变，boss杀手。' },
        '斥罪': { bestSkill: 2, recMastery: 3, reason: '2技能法伤+自回血+减伤，专三承压和伤害质变。' },
        '刻俄柏': { bestSkill: 3, recMastery: 3, reason: '3技能大范围物理爆发+斩杀，专三伤害质变。' },
        '帕拉斯': { bestSkill: 2, recMastery: 3, reason: '2技能鼓舞拐群体攻速和攻击力，专三拐力质变。' },
        '空': { bestSkill: 2, recMastery: 3, reason: '2技能群体攻速拐+眩晕，专三拐力和控制效果质变。' },
        '夜莺': { bestSkill: 2, recMastery: 3, reason: '2技能群体法抗盾+净化，专三覆盖面质变。' },
        '凯尔希': { bestSkill: 3, recMastery: 3, reason: '3技能Mon3tr巨额真伤+治疗，专三伤害和持续时间质变。' },
        '阿米娅': { bestSkill: 3, recMastery: 3, reason: '3技能精神爆发巨额法伤+净化，专三伤害质变，且吃自己天赋加成。' },
        '澄闪': { bestSkill: 2, recMastery: 3, reason: '2技能蓄力大范围法伤，专三伤害质变。' },
        '逻各斯': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+控制，专三伤害和控制效果质变。' },
        '林': { bestSkill: 2, recMastery: 3, reason: '2技能群攻治疗+攻击力提升，专三治疗量和拐力质变。' },
        '白金': { bestSkill: 2, recMastery: 3, reason: '2技能延期广域大范围持续攻击，专三覆盖面和攻速提升。' },
        '远牙': { bestSkill: 3, recMastery: 3, reason: '3技能超远距离大范围物理爆发，专三伤害质变。' },
        '早露': { bestSkill: 3, recMastery: 3, reason: '3技能大范围减速+高攻，专三控制效果和伤害质变。' },
        '空弦': { bestSkill: 2, recMastery: 3, reason: '2技能攻回大范围连射，专三伤害质变。' },
        '维娜·维多利亚': { bestSkill: 2, recMastery: 3, reason: '2技能群体爆发+回费，专三伤害和费用产出质变。' },
        '隐德来希': { bestSkill: 2, recMastery: 3, reason: '2技能群体法伤+减益清除，专三伤害和效果质变。' },
        '佩佩': { bestSkill: 3, recMastery: 3, reason: '3技能召唤物大范围输出，专三召唤物伤害质变。' },
        '左乐': { bestSkill: 3, recMastery: 3, reason: '3技能大范围物理爆发+斩杀，专三伤害质变。' },
        '重岳': { bestSkill: 3, recMastery: 3, reason: '3技能五连击巨额物理爆发，专三伤害质变。' },
        '止颂': { bestSkill: 2, recMastery: 3, reason: '2技能鼓舞拐群体增益，专三拐力质变。' },
        '锏': { bestSkill: 3, recMastery: 3, reason: '3技能巨额爆发+破甲，专三伤害质变。' },
        '蕾缪安': { bestSkill: 2, recMastery: 3, reason: '2技能归乡邀约清杂点杀灵活兼顾，通缉机制配合天赋增伤显著，专三伤害和回转质变。', skill3: '3技能礼炮·强制追思对boss单发狙杀伤害极高，但需要暖机时间。' },
        '乌尔比安': { bestSkill: 3, recMastery: 3, reason: '3技能位移+眩晕+高额攻防提升，专三后承压和输出质变，深海队核心。', skill2: '2技能常驻站场输出不错，但上限不如3技能。' },
        '缪尔赛思': { bestSkill: 3, recMastery: 3, reason: '3技能浅层非熵复制近战/远程分别提供眩晕聚怪和束缚控制，战术灵活性极高，专三效果质变。', skill2: '2技能生态耦合适合格子不够时复制近战单位抗线。' },
        '伊内丝': { bestSkill: 3, recMastery: 3, reason: '3技能摔炮控制型爆费，破隐+减速+回费+控制四合一，专三回费和伤害提升。', skill2: '2技能减速+隐匿破隐也很好用，泛用性极高。' },
        '焰尾': { bestSkill: 2, recMastery: 1, reason: '2技能迅敏直觉攻回输出+闪避，专一回费和伤害够用。专三收益不大不推荐强行专。', skill3: '3技能迅敏斩击高爆发但CD长，需要操作时机。' },
        '忍冬': { bestSkill: 3, recMastery: 3, reason: '3技能高额爆发+自回血，专三伤害和续航质变。', skill2: '2技能站场输出也不错，但上限不如3技能。' },
        '齐尔查克': { bestSkill: 2, recMastery: 1, reason: '2技能提供元素伤害免疫+远程攻击，专一即可获得核心免疫效果。功能性先锋。' },
        '历阵锐枪芬': { bestSkill: 1, recMastery: 1, reason: '1技能连击+回费，冲锋手核心技能，专一回费量够用。', skill2: '2技能加攻加防适合前期站场过渡。' },
        '怒潮凛冬': { bestSkill: 2, recMastery: 3, reason: '2技能群体增益+输出，专三后拐力和自身伤害质变，凛冬异格核心。' },
        '森西': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+自回血，专一即可满足日常使用。' },
        '斩业星熊': { bestSkill: 2, recMastery: 3, reason: '2技能高额爆发+护盾，专三伤害和承压质变，星熊异格决战技。' },
        '凛御银灰': { bestSkill: 3, recMastery: 3, reason: '3技能巨额真伤+大范围，专三伤害质变，银灰异格决战核心。' },
        '赤刃明霄陈': { bestSkill: 3, recMastery: 3, reason: '3技能高额爆发+破甲线，专三伤害质变，陈异格核心输出。' },
        '假日威龙陈': { bestSkill: 3, recMastery: 3, reason: '3技能假日风暴大范围物理爆发+溅射，专三伤害质变，高台物伤天花板。', skill1: '1技能高压冲击稳定输出也不错，适合挂机。' },
        '深靛': { bestSkill: 2, recMastery: 1, reason: '2技能弹射法伤，专一伤害够用。' },
        '夕': { bestSkill: 3, recMastery: 3, reason: '3技能工笔入画群体法伤+控制，专三伤害和控制质变。' },
        '灵知': { bestSkill: 2, recMastery: 3, reason: '2技能零度爆发大范围冻结+法伤，专三冻结持续和伤害质变。', skill3: '3技能失温症减速也不错但优先度低于2技能。' },
        '薇薇安娜': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+控制，专三伤害质变。' },
        '司霆惊蛰': { bestSkill: 3, recMastery: 3, reason: '3技能大范围雷伤+控制，专三伤害和控制质变。' },
        '贝洛内': { bestSkill: 2, recMastery: 1, reason: '2技能站场输出不错，专一够用。' },
        '百炼嘉维尔': { bestSkill: 2, recMastery: 3, reason: '2技能高额物理群伤+自回血，专三伤害和续航质变。' },
        '圣约送葬人': { bestSkill: 3, recMastery: 3, reason: '3技能巨额物理爆发+斩杀，专三伤害质变。' },
        '霍华德': { bestSkill: 2, recMastery: 1, reason: '2技能费用回复+功能，专一够用。' },
        '寻澜': { bestSkill: 2, recMastery: 1, reason: '2技能输出+回费，专一够用。' },
        '谜图': { bestSkill: 1, recMastery: 1, reason: '1技能稳定输出+回费，专一够用。' },
        '晓歌': { bestSkill: 2, recMastery: 1, reason: '2技能攻回+输出，专一够用。' },
        '青枳': { bestSkill: 2, recMastery: 1, reason: '2技能回费+减速控制，专一够用。' },
        '松桐': { bestSkill: 2, recMastery: 1, reason: '2技能输出+回费，专一够用。' },
        '万顷': { bestSkill: 2, recMastery: 1, reason: '2技能群体增益+回费，专一够用。' },
        '夜半': { bestSkill: 2, recMastery: 1, reason: '2技能回费+功能，专一够用。' },
        '渡桥': { bestSkill: 2, recMastery: 1, reason: '2技能减速+回费，专一够用。' },
        '冬时': { bestSkill: 1, recMastery: 1, reason: '1技能回费+输出，专一够用。' },
        '苍苔': { bestSkill: 2, recMastery: 1, reason: '2技能站场输出，专一够用。' },
        '海沫': { bestSkill: 2, recMastery: 1, reason: '2技能自回血+输出，专一够用。' },
        '聆听': { bestSkill: 2, recMastery: 1, reason: '2技能回费+治疗，专一够用。' },
        '子月': { bestSkill: 2, recMastery: 1, reason: '2技能输出+控制，专一够用。' },
        '深巡': { bestSkill: 2, recMastery: 1, reason: '2技能输出+回费，专一够用。' },
        '深律': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '暮落': { bestSkill: 2, recMastery: 1, reason: '2技能输出+承压，专一够用。' },
        '火哨': { bestSkill: 2, recMastery: 1, reason: '2技能输出+控制，专一够用。' },
        '灰毫': { bestSkill: 2, recMastery: 1, reason: '2技能回费+控制，专一够用。' },
        '菲亚梅塔': { bestSkill: 3, recMastery: 3, reason: '3技能蓄力大范围物理爆发，专三伤害质变。' },
        '承曦格雷伊': { bestSkill: 2, recMastery: 1, reason: '2技能稳定输出，专一够用。' },
        '隐现': { bestSkill: 2, recMastery: 1, reason: '2技能隐匿+输出，专一够用。' },
        '寒芒克洛丝': { bestSkill: 2, recMastery: 1, reason: '2技能稳定对空输出，专一够用。' },
        '截云': { bestSkill: 2, recMastery: 1, reason: '2技能位移+控制，专一够用。' },
        '霜华': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '水灯心': { bestSkill: 2, recMastery: 1, reason: '2技能输出+回费，专一够用。' },
        '铅踝': { bestSkill: 2, recMastery: 1, reason: '2技能减速+输出，专一够用。' },
        '熔泉': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+治疗，专一够用。' },
        '雪猎': { bestSkill: 2, recMastery: 1, reason: '2技能输出+控制，专一够用。' },
        '跃跃': { bestSkill: 2, recMastery: 1, reason: '2技能输出+回费，专一够用。' },
        '娜仁图亚': { bestSkill: 3, recMastery: 3, reason: '3技能蓄力大范围法伤+控制，专三伤害质变。' },
        '灰烬': { bestSkill: 3, recMastery: 3, reason: '3技能突击战术高额爆发，专三伤害质变。' },
        '鸿雪': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤爆发，专三伤害质变。' },
        '蜜蜡': { bestSkill: 2, recMastery: 1, reason: '2技能法护盾+输出，专一够用。' },
        '特米米': { bestSkill: 2, recMastery: 1, reason: '2技能群体法伤，专一够用。' },
        '布丁': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+护盾，专一够用。' },
        '薄绿': { bestSkill: 2, recMastery: 1, reason: '2技能群体法伤，专一够用。' },
        '苦艾': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '莱恩哈特': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '洛洛': { bestSkill: 2, recMastery: 1, reason: '2技能群体增益，专一够用。' },
        '蚀清': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+减益，专一够用。' },
        '卡达': { bestSkill: 2, recMastery: 1, reason: '2技能费用回复+功能，专一够用。' },
        '惊蛰': { bestSkill: 2, recMastery: 1, reason: '2技能群体法伤+眩晕，专一够用。' },
        '格雷伊': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '和音': { bestSkill: 2, recMastery: 1, reason: '2技能群体增益，专一够用。' },
        '复奏': { bestSkill: 2, recMastery: 1, reason: '2技能费用回复，专一够用。' },
        '桑葚': { bestSkill: 1, recMastery: 1, reason: '1技能元素治疗，专一够用。元素奶核心。' },
        '蜜莓': { bestSkill: 1, recMastery: 1, reason: '1技能元素治疗，专一够用。元素奶核心。' },
        '锡兰': { bestSkill: 2, recMastery: 1, reason: '2技能抵抗治疗，专一够用。' },
        '清流': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+减速，专一够用。' },
        '絮雨': { bestSkill: 2, recMastery: 1, reason: '2技能抵抗治疗，专一够用。' },
        '褐果': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+护盾，专一够用。' },
        '图耶': { bestSkill: 2, recMastery: 1, reason: '2技能稳定治疗，专一够用。' },
        '海蒂': { bestSkill: 2, recMastery: 1, reason: '2技能召唤+治疗，专一够用。' },
        '夏栎': { bestSkill: 2, recMastery: 1, reason: '2技能召唤+输出，专一够用。' },
        '罗比菈塔': { bestSkill: 2, recMastery: 1, reason: '2技能费用回复+治疗，专一够用。' },
        '泡泡': { bestSkill: 2, recMastery: 1, reason: '2技能承压+治疗，专一够用。' },
        '古米': { bestSkill: 2, recMastery: 1, reason: '2技能急救治疗+护盾，专一够用。' },
        '坚雷': { bestSkill: 2, recMastery: 1, reason: '2技能输出+承压，专一够用。' },
        '洋灰': { bestSkill: 2, recMastery: 1, reason: '2技能承压+输出，专一够用。' },
        '瑕光': { bestSkill: 2, recMastery: 3, reason: '2技能慑敌辉光高额法伤+控制，专三伤害质变。' },
        '波登可': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+控制，专一够用。' },
        '雪线': { bestSkill: 2, recMastery: 1, reason: '2技能承压+治疗，专一够用。' },
        '雷蛇': { bestSkill: 2, recMastery: 1, reason: '2技能承压+法伤反击，专一够用。' },
        '吽': { bestSkill: 2, recMastery: 1, reason: '2技能承压+治疗，专一够用。' },
        '极光': { bestSkill: 2, recMastery: 1, reason: '2技能输出+控制，专一够用。' },
        '火神': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+自回血，专一够用。' },
        '石棉': { bestSkill: 2, recMastery: 1, reason: '2技能法抗盾+承压，专一够用。法伤关卡对策。' },
        '拜松': { bestSkill: 2, recMastery: 1, reason: '2技能承压+增益，专一够用。' },
        '暴雨': { bestSkill: 2, recMastery: 1, reason: '2技能隐匿+控制，专一够用。' },
        '车尔尼': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '歌蕾蒂娅': { bestSkill: 3, recMastery: 3, reason: '3技能大范围位移+控制+伤害，专三控制效果质变。推拉特种核心。' },
        '温蒂': { bestSkill: 2, recMastery: 1, reason: '2技能水炮模式推人，专一够用。' },
        '阿': { bestSkill: 3, recMastery: 1, reason: '3技能神经毒素大幅削弱，专一即可获得核心削弱效果。' },
        '异客': { bestSkill: 3, recMastery: 3, reason: '3技能辉煌裂片大范围法伤+控制，专三伤害质变。' },
        '孑': { bestSkill: 3, recMastery: 1, reason: '3技能刺身拼盘回血+输出，专一够用。肉鸽神器。' },
        '巫恋': { bestSkill: 2, recMastery: 3, reason: '2技能诅咒娃娃高额脆弱拐，专三拐力质变，削弱体系核心。' },
        '安洁莉娜': { bestSkill: 3, recMastery: 3, reason: '3技能反重力模式群体攻击力提升+击飞，专三拐力质变。' },
        '巫毒': { bestSkill: 2, recMastery: 1, reason: '2技能削弱+控制，专一够用。' },
        '卡涅利安': { bestSkill: 2, recMastery: 3, reason: '2技能食噬之印群体法伤，专三伤害质变。' },
        '黑键': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+控制，专三伤害质变。' },
        '霍尔海雅': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+控制，专三伤害质变。' },
        '圣聆初雪': { bestSkill: 2, recMastery: 3, reason: '2技能群体脆弱+法伤，专三拐力和伤害质变。' },
        '玛露西尔': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+控制，专三伤害质变。' },
        '温米': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+增益，专一够用。' },
        '特克诺': { bestSkill: 2, recMastery: 1, reason: '2技能召唤+输出，专一够用。' },
        '维伊': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤爆发，专三伤害质变。' },
        '荒芜拉普兰德': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+控制，专三伤害质变。' },
        '死芒': { bestSkill: 3, recMastery: 3, reason: '3技能大范围爆发，专三伤害质变。' },
        '妮芙': { bestSkill: 3, recMastery: 3, reason: '3技能大范围法伤+治疗，专三伤害和治疗效果质变。' },
        '戴菲恩': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+控制，专一够用。' },
        '寒檀': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+治疗，专一够用。' },
        'Mon3tr': { bestSkill: 3, recMastery: 3, reason: '3技能指令：熔毁Mon3tr巨额真伤+治疗，专三伤害和持续时间质变，决战核心。', skill1: '1技能自动回复治疗稳定，适合挂机。', skill2: '2技能指令：战术协同提供群体攻击力和防御力提升，拐力不错。' },
        '塑心': { bestSkill: 2, recMastery: 3, reason: '2技能元素伤害+群体增幅，专三伤害和辅助效果质变，元素队核心辅助。' },
        '凯尔希·思衡托': { bestSkill: 3, recMastery: 3, reason: '3技能起飞+大范围治疗+法伤，专三伤害和治疗效果质变。', skill2: '2技能群体治疗+法抗提升，适合法伤关卡。' },
        '星源': { bestSkill: 2, recMastery: 1, reason: '2技能元素伤害+控制，专一够用。' },
        '协律': { bestSkill: 2, recMastery: 1, reason: '2技能费用回复+增益，专一够用。' },
        '雪绒': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+护盾，专一够用。' },
        '炎熔': { bestSkill: 2, recMastery: 1, reason: '2技能群体法伤，专一够用。' },
        '夜烟': { bestSkill: 2, recMastery: 1, reason: '2技能单点法伤+减速，专一够用。' },
        '至简': { bestSkill: 2, recMastery: 1, reason: '2技能费用回复，专一够用。' },
        '折光': { bestSkill: 2, recMastery: 1, reason: '2技能治疗+控制，专一够用。' },
        '烛煌': { bestSkill: 2, recMastery: 1, reason: '2技能法伤+治疗，专一够用。' }
    };

    function buildSkillAdvice(members) {
        if (!members.length) return '';
        const items = members.map(member => {
            const name = member.name;
            const rarity = member.rarityNum;
            const currentSkill = member.skill || 1;
            const currentMastery = member.mastery || 0;
            const rec = SKILL_RECOMMENDATIONS[name];

            // 如果没有手动推荐数据，从技能缓存自动推算最强技能
            let autoRec = null;
            if (!rec) {
                const allSkills = typeof window.ARKNIGHTS_OPERATOR_SKILLS !== 'undefined' ? window.ARKNIGHTS_OPERATOR_SKILLS : (typeof window.OPERATOR_SKILLS !== 'undefined' ? window.OPERATOR_SKILLS : null);
                // 精确匹配或模糊匹配
                let skills = null;
                if (allSkills) {
                    skills = allSkills[name] || null;
                    if (!skills) {
                        // 模糊匹配：去掉后缀、变体
                        const alt = name.replace(/[·\-].*$/, '').replace(/\(.*\)$/, '').trim();
                        const keys = Object.keys(allSkills);
                        // 前缀匹配
                        skills = keys.find(k => k.startsWith(alt) || alt.startsWith(k)) ? allSkills[keys.find(k => k.startsWith(alt) || alt.startsWith(k))] : null;
                        if (!skills) {
                            // 包含匹配
                            skills = keys.find(k => k.includes(alt) || alt.includes(k)) ? allSkills[keys.find(k => k.includes(alt) || alt.includes(k))] : null;
                        }
                    }
                }
                if (skills && skills.skills && skills.skills.length > 0) {
                    const skillList = skills.skills;
                    let bestIdx = 0;
                    let bestRows = 0;
                    skillList.forEach((sk, i) => {
                        const rows = sk.rows || [];
                        if (rows.length > bestRows) { bestRows = rows.length; bestIdx = i; }
                    });
                    const sk = skillList[bestIdx];
                    const recM = bestRows >= 10 ? 3 : (bestRows >= 7 ? 2 : 1);
                    autoRec = {
                        bestSkill: bestIdx + 1,
                        recMastery: recM,
                        reason: `自动推荐：${sk.name || ('S' + (bestIdx + 1))}，该技能拥有最多等级数据，通常为该干员最强技能。建议专${recM}。`
                    };
                }
            }
            const usedRec = rec || autoRec;

            if (!usedRec) {
                return `<div class="skill-advice-item skill-advice-unknown">
                    <span class="skill-advice-name">${escapeHtml(name)}</span>
                    <span class="skill-advice-class">${escapeHtml(member.op.class)}${rarity}星</span>
                    <div class="skill-advice-detail">该干员无技能数据，无法分析。</div>
                </div>`;
            }
            const skillMatch = currentSkill === usedRec.bestSkill;
            const masteryOk = currentMastery >= usedRec.recMastery;
            const masteryPartial = currentMastery > 0 && currentMastery < usedRec.recMastery;
            const skillName = member.selectedSkill ? member.selectedSkill.name : `S${usedRec.bestSkill}`;
            let statusClass = skillMatch && masteryOk ? 'skill-advice-good' : (skillMatch && masteryPartial ? 'skill-advice-warn' : 'skill-advice-bad');
            let statusText = '';
            if (skillMatch && masteryOk) statusText = '配置正确';
            else if (skillMatch && masteryPartial) statusText = `技能正确但专精不够（建议专${usedRec.recMastery}）`;
            else if (!skillMatch && masteryOk) statusText = `专精浪费在非推荐技能上了`;
            else if (currentSkill !== usedRec.bestSkill && currentMastery === 0) statusText = `建议使用S${usedRec.bestSkill}并专${usedRec.recMastery}`;
            else statusText = `建议切换S${usedRec.bestSkill}并专${usedRec.recMastery}`;

            const isAuto = !rec && autoRec;
            return `<div class="skill-advice-item ${statusClass}${isAuto ? ' skill-advice-auto' : ''}">
                <div class="skill-advice-header">
                    <span class="skill-advice-name">${escapeHtml(name)}</span>
                    <span class="skill-advice-class">${escapeHtml(member.op.class)}${rarity}星</span>
                    <span class="skill-advice-status">${statusText}</span>
                </div>
                <div class="skill-advice-detail">
                    <strong>${isAuto ? '自动推荐' : '推荐'}：</strong>${escapeHtml(usedRec.reason)}
                    ${usedRec.skill2 ? `<div class="skill-advice-alt">备选：${escapeHtml(usedRec.skill2)}</div>` : ''}
                </div>
            </div>`;
        });
        return `
            <div class="skill-advice-list">
                ${items.join('')}
            </div>
        `;
    }

    // 多模式分析渲染：覆盖上方的通用分析函数
    function renderSquadAnalysis() {
        if (!allOperators.length) allOperators = extractOperators();
        const members = getSelectedMembers();
        if (!squadAnalysisPanel || !squadAnalysisContent) return;

        if (!members.length) {
            squadAnalysisPanel.hidden = false;
            squadAnalysisContent.innerHTML = '<div class="squad-analysis-empty">当前编队为空，请先选择干员后再开始分析。</div>';
            return;
        }

        const profile = buildCapabilityProfile(members);
        const classCount = countBy(members, member => member.op.class);
        const branchCount = countBy(members, member => member.op.branch);
        const avgRarityNum = members.reduce((sum, member) => sum + member.rarityNum, 0) / members.length;
        const avgRarity = avgRarityNum.toFixed(1);
        const modes = getAnalysisModes();

        const coreRows = [
            ['费用启动', topMembersByRole(members, '费用启动')],
            ['主力输出', topMembersByRole(members, '主力输出')],
            ['生存承压', topMembersByRole(members, '生存承压')],
            ['控场辅助', topMembersByRole(members, '控场辅助')]
        ].map(([role, names]) => `
            <div class="analysis-core-row">
                <span>${role}</span>
                <strong>${names.length ? names.map(escapeHtml).join('、') : '暂无明确核心'}</strong>
            </div>
        `).join('');

        const modeTabs = modes.map((mode, index) => `
            <button class="analysis-mode-tab${index === 0 ? ' active' : ''}" type="button" data-analysis-mode="${mode.key}">${mode.label}</button>
        `).join('');

        const modePanels = modes.map((mode, index) => {
            const score = calculateModeScore(members, profile, mode, classCount, avgRarityNum);
            const assessment = buildModeAssessment(mode, members, profile, classCount, avgRarityNum);
            const caps = [
                ['费用启动', scoreCapability(profile.cost, mode.targets.cost)],
                ['治疗续航', scoreCapability(profile.healing, mode.targets.healing)],
                ['对空能力', scoreCapability(profile.antiAir, mode.targets.antiAir)],
                ['物理输出', scoreCapability(profile.physical, mode.targets.physical)],
                ['法术/元素输出', scoreCapability(profile.arts, mode.targets.arts)],
                ['群攻清杂', scoreCapability(profile.aoe, mode.targets.aoe)],
                ['Boss处理', scoreCapability(profile.boss, mode.targets.boss)],
                ['控场能力', scoreCapability(profile.control, mode.targets.control)],
                ['承压生存', scoreCapability(profile.survival, mode.targets.survival)],
                ['机动补位', scoreCapability(profile.fastRedeploy, mode.targets.fastRedeploy)]
            ];
            const capabilityHtml = caps.map(([label, scoreValue]) => `
                <div class="analysis-capability">
                    <div class="analysis-capability-top">
                        <span>${label}</span>
                        <strong>${scoreValue} · ${getScoreLevel(scoreValue)}</strong>
                    </div>
                    <div class="analysis-bar"><span style="width:${scoreValue}%"></span></div>
                </div>
            `).join('');

            return `
                <div class="analysis-mode-panel${index === 0 ? ' active' : ''}" data-analysis-panel="${mode.key}">
                    <div class="analysis-score-card">
                        <div class="analysis-score-circle">${score}</div>
                        <div>
                            <h4>${mode.label}：${getScoreLevel(score)}</h4>
                            <p>${escapeHtml(mode.desc)}</p>
                            <p>当前${members.length}人，平均星级${avgRarity}。职业分布：${escapeHtml(Object.entries(classCount).map(([key, value]) => `${key}${value}`).join(' · ') || '未知')}。</p>
                            <p>主要分支：${escapeHtml(Object.entries(branchCount).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([key, value]) => `${key}${value}`).join(' · ') || '未知')}。</p>
                        </div>
                    </div>
                    <div class="analysis-grid">
                        <section class="analysis-card">
                            <h4>模式能力条</h4>
                            ${capabilityHtml}
                        </section>
                        <section class="analysis-card">
                            <h4>核心分工</h4>
                            ${coreRows}
                        </section>
                        <section class="analysis-card">
                            <h4>该模式优点</h4>
                            <ul>${renderList(assessment.strengths)}</ul>
                        </section>
                        <section class="analysis-card">
                            <h4>该模式风险</h4>
                            <ul>${renderList(assessment.risks)}</ul>
                        </section>
                        <section class="analysis-card analysis-card-wide">
                            <h4>该模式建议</h4>
                            <ul>${renderList(assessment.suggestions)}</ul>
                        </section>
                        <section class="analysis-card analysis-card-wide analysis-playbook-section">
                            <h4>打法演示</h4>
                            <div class="playbook-content">${(() => { try { return buildPlaybook(mode, members, profile, classCount); } catch(e) { console.error('[buildPlaybook ERROR]', e); return '<p style="color:#f87171">打法演示生成失败: ' + e.message + '</p>'; } })()}</div>
                        </section>
                        <section class="analysis-card analysis-card-wide analysis-adjust-section">
                            <h4>建议改动</h4>
                            <div class="adjust-content">${(() => { try { return buildAdjustSuggestion(mode, members, profile, classCount); } catch(e) { console.error('[buildAdjustSuggestion ERROR]', e); return '<p style="color:#f87171">建议改动生成失败: ' + e.message + '</p>'; } })()}</div>
                        </section>
                    </div>
                </div>
            `;
        }).join('');

        squadAnalysisPanel.hidden = false;
        console.log('[DEBUG] modePanels length:', modePanels.length);
        console.log('[DEBUG] modePanels has playbook:', modePanels.includes('打法演示'));
        console.log('[DEBUG] modePanels has adjust:', modePanels.includes('建议改动'));
        console.log('[DEBUG] skillAdvice length:', buildSkillAdvice(members).length);
        squadAnalysisContent.innerHTML = `
            <div class="analysis-mode-tabs">${modeTabs}</div>
            ${modePanels}
            <section class="analysis-card analysis-card-wide analysis-skill-section">
                <h4>技能搭配与分析</h4>
                <p class="analysis-skill-desc">基于社区攻略共识（魔法Zc目录等攻略作者），对每个干员的当前技能选择和专精配置进行评估。数据来源：PRTS Wiki、B站攻略[$TRAE_REF](https://www.bilibili.com/read/cv11196402/)[$TRAE_REF](https://www.bilibili.com/read/mobile?id=3734145)。</p>
                ${buildSkillAdvice(members)}
            </section>
        `;
        squadAnalysisContent.querySelectorAll('[data-analysis-mode]').forEach(tab => {
            tab.addEventListener('click', () => {
                const key = tab.dataset.analysisMode;
                squadAnalysisContent.querySelectorAll('[data-analysis-mode]').forEach(item => item.classList.toggle('active', item === tab));
                squadAnalysisContent.querySelectorAll('[data-analysis-panel]').forEach(panel => panel.classList.toggle('active', panel.dataset.analysisPanel === key));
            });
        });
        squadAnalysisPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (squadAnalyzeBtn) {
        squadAnalyzeBtn.addEventListener('click', renderSquadAnalysis);
    }

    if (squadAnalysisCloseBtn) {
        squadAnalysisCloseBtn.addEventListener('click', () => {
            if (squadAnalysisPanel) squadAnalysisPanel.hidden = true;
        });
    }

    // ========== 干员选择弹窗 ==========
    function openSelect(slotIndex) {
        currentSlotIndex = slotIndex;
        if (!allOperators.length) allOperators = extractOperators();
        renderSelectGrid();
        if (selectModal) selectModal.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeSelect() {
        if (selectModal) selectModal.hidden = true;
        document.body.style.overflow = '';
        currentSlotIndex = -1;
    }

    document.querySelectorAll('[data-close-squad-select]').forEach(btn => {
        btn.addEventListener('click', closeSelect);
    });

    function renderSelectGrid() {
        if (!selectGrid) return;
        selectGrid.innerHTML = '';

        const keyword = squadSearchKeyword.toLowerCase();
        const filtered = allOperators.filter(op => {
            if (squadSelectFilters.class !== 'all' && op.class !== squadSelectFilters.class) return false;
            if (squadSelectFilters.rarity !== 'all' && op.rarity !== squadSelectFilters.rarity) return false;
            if (keyword && !op.name.toLowerCase().includes(keyword) && !op.class.includes(keyword) && !op.branch.includes(keyword)) return false;
            return true;
        });

        filtered.forEach(op => {
            const item = document.createElement('div');
            const alreadySelected = squadData.some((member, index) => {
                return index !== currentSlotIndex && member && member.name === op.name;
            });
            item.className = 'squad-select-item' + (alreadySelected ? ' disabled' : '');
            item.innerHTML = `
                <img class="atlas-avatar" src="${op.avatar || ''}" alt="${op.name}" loading="lazy">
                <div class="atlas-operator-name">${op.name}</div>
                <div class="atlas-operator-stars">${'★'.repeat(parseInt((op.rarity || '0').replace('星', '')) || 0)}</div>
                <button class="squad-select-detail-btn" type="button" data-detail-name="${op.name}">查看详情</button>
                ${alreadySelected ? '<div class="squad-select-used">已入队</div>' : ''}
            `;
            item.addEventListener('click', (event) => {
                const detailBtn = event.target.closest('.squad-select-detail-btn');
                if (detailBtn) {
                    event.stopPropagation();
                    if (selectModal) selectModal.hidden = true;
                    document.body.style.overflow = 'hidden';
                    window.openAtlasOperatorDetailByName?.(op.name);
                    return;
                }
                if (alreadySelected) return;
                addOperator(op.name);
                closeSelect();
            });
            selectGrid.appendChild(item);
        });

        if (!filtered.length) {
            selectGrid.innerHTML = '<p style="color:var(--text-muted); text-align:center; grid-column:1/-1; padding:20px;">未找到符合条件的干员</p>';
        }
    }

    function addOperator(name) {
        const op = allOperators.find(o => o.name === name);
        if (!op || currentSlotIndex < 0) return;
        const alreadyInSquad = squadData.some((member, index) => {
            return index !== currentSlotIndex && member && member.name === name;
        });
        if (alreadyInSquad) {
            alert(`${name} 已经在当前编队中，不能重复选择同一角色`);
            return;
        }
        const maxLvl = maxLevelByRarity[op.rarity] || 90;
        squadData[currentSlotIndex] = {
            name: op.name,
            skill: 1,
            level: maxLvl,
            mastery: 0,
            potential: 1,
            module: '无'
        };
        saveSquad();
        renderSquad();
    }

    // 选择弹窗筛选
    document.querySelectorAll('[data-squad-filter]').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.squadFilter;
            const value = this.dataset.squadValue;
            squadSelectFilters[type] = value;
            document.querySelectorAll(`[data-squad-filter="${type}"]`).forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderSelectGrid();
        });
    });

    if (squadSearchBox) {
        squadSearchBox.addEventListener('input', function() {
            squadSearchKeyword = this.value.trim();
            renderSelectGrid();
        });
    }

    // ========== 配置弹窗 ==========
    function openConfig(slotIndex) {
        currentConfigIndex = slotIndex;
        const member = squadData[slotIndex];
        if (!member) return;
        const op = allOperators.find(o => o.name === member.name);
        if (!op) return;

        if (configAvatar) configAvatar.src = op.avatar || '';
        if (configName) configName.textContent = op.name;
        if (configSubtitle) configSubtitle.textContent = `${op.rarity} · ${op.class} · ${op.branch}`;

        // 技能选项
        const skillCount = Math.min(Math.max(op.skillCount || 3, 1), 3);
        if (configSkill) {
            configSkill.innerHTML = '';
            for (let i = 1; i <= skillCount; i++) {
                const btn = document.createElement('button');
                btn.className = 'squad-option-btn' + (member.skill === i ? ' active' : '');
                btn.textContent = `技能 ${i}`;
                btn.dataset.skill = i;
                btn.addEventListener('click', () => {
                    configSkill.querySelectorAll('.squad-option-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
                configSkill.appendChild(btn);
            }
        }

        // 等级滑块
        const maxLvl = maxLevelByRarity[op.rarity] || 90;
        if (configLevel) {
            configLevel.max = maxLvl;
            configLevel.value = member.level || maxLvl;
            if (configLevelVal) configLevelVal.textContent = configLevel.value;
        }

        // 专精
        if (configMastery) {
            configMastery.querySelectorAll('.squad-option-btn').forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.dataset.mastery) === (member.mastery || 0));
            });
            if (configMasteryVal) configMasteryVal.textContent = member.mastery || 0;
        }

        // 潜能
        if (configPotential) {
            configPotential.value = member.potential || 1;
            if (configPotentialVal) configPotentialVal.textContent = configPotential.value;
        }

        // 模组
        if (configModule) {
            const moduleRow = configModule.closest('.squad-config-row');
            const moduleList = Array.isArray(op.modules) ? op.modules : [];
            const savedModule = moduleList.includes(member.module) ? member.module : '无';
            member.module = savedModule;

            if (moduleList.length) {
                if (moduleRow) moduleRow.style.display = '';
                configModule.innerHTML = '<button class="squad-option-btn active" data-module="无">未装备</button>';
                moduleList.forEach((moduleName, index) => {
                    const btn = document.createElement('button');
                    btn.className = 'squad-option-btn' + (savedModule === moduleName ? ' active' : '');
                    btn.dataset.module = moduleName;
                    btn.textContent = `模组${index + 1}：${moduleName}`;
                    if (savedModule === moduleName) {
                        configModule.querySelector('[data-module="无"]')?.classList.remove('active');
                    }
                    configModule.appendChild(btn);
                });
            } else {
                if (moduleRow) moduleRow.style.display = '';
                configModule.innerHTML = '<span class="squad-no-module">暂无可用模组</span>';
            }
        }

        if (configModal) configModal.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeConfig() {
        if (configModal) configModal.hidden = true;
        document.body.style.overflow = '';
        currentConfigIndex = -1;
    }

    document.querySelectorAll('[data-close-squad-config]').forEach(btn => {
        btn.addEventListener('click', closeConfig);
    });

    // 配置面板交互
    if (configLevel) {
        configLevel.addEventListener('input', function() {
            if (configLevelVal) configLevelVal.textContent = this.value;
        });
    }

    if (configPotential) {
        configPotential.addEventListener('input', function() {
            if (configPotentialVal) configPotentialVal.textContent = this.value;
        });
    }

    if (configMastery) {
        configMastery.addEventListener('click', function(e) {
            const btn = e.target.closest('[data-mastery]');
            if (!btn) return;
            configMastery.querySelectorAll('.squad-option-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (configMasteryVal) configMasteryVal.textContent = btn.dataset.mastery;
        });
    }

    if (configModule) {
        configModule.addEventListener('click', function(e) {
            const btn = e.target.closest('[data-module]');
            if (!btn) return;
            configModule.querySelectorAll('.squad-option-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    }

    // 保存配置
    const saveConfigBtn = document.getElementById('squadSaveConfigBtn');
    if (saveConfigBtn) {
        saveConfigBtn.addEventListener('click', function() {
            if (currentConfigIndex < 0) return;
            const member = squadData[currentConfigIndex];
            if (!member) return;

            const activeSkillBtn = configSkill.querySelector('.squad-option-btn.active');
            member.skill = activeSkillBtn ? parseInt(activeSkillBtn.dataset.skill) : 1;
            member.level = parseInt(configLevel.value) || 90;
            member.mastery = parseInt(configMastery.querySelector('.squad-option-btn.active')?.dataset.mastery || '0');
            member.potential = parseInt(configPotential.value) || 1;
            member.module = configModule.querySelector('.squad-option-btn.active')?.dataset.module || '无';

            saveSquad();
            renderSquad();
            closeConfig();
        });
    }

    // 移除干员
    const removeBtn = document.getElementById('squadRemoveBtn');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            if (currentConfigIndex < 0) return;
            removeMember(currentConfigIndex);
            closeConfig();
        });
    }

    // 查看干员详情
    const viewDetailBtn = document.getElementById('squadViewDetailBtn');
    if (viewDetailBtn) {
        viewDetailBtn.addEventListener('click', function() {
            if (currentConfigIndex < 0) return;
            const member = squadData[currentConfigIndex];
            if (!member) return;
            closeConfig();
            window.openAtlasOperatorDetailByName?.(member.name);
        });
    }

    // ========== 清空编队 ==========
    const clearBtn = document.getElementById('squadClearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (!confirm('确定要清空当前编队吗？')) return;
            squadData = new Array(12).fill(null);
            saveSquad();
            renderSquad();
        });
    }

    // ========== 导出编队 ==========
    const exportBtn = document.getElementById('squadExportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            const members = squadData.filter(Boolean);
            if (!members.length) {
                alert('编队为空，无法导出');
                return;
            }
            const exportData = members.map(m => {
                const op = allOperators.find(o => o.name === m.name);
                return {
                    name: m.name,
                    class: op?.class || '',
                    rarity: op?.rarity || '',
                    skill: m.skill,
                    level: m.level,
                    mastery: m.mastery,
                    potential: m.potential,
                    module: m.module
                };
            });
            const json = JSON.stringify(exportData, null, 2);
            navigator.clipboard.writeText(json).then(() => {
                alert('编队 JSON 已复制到剪贴板！');
            }).catch(() => {
                // 降级方案
                const textarea = document.createElement('textarea');
                textarea.value = json;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('编队 JSON 已复制到剪贴板！');
            });
        });
    }

    // ========== 导入编队 ==========
    const importBtn = document.getElementById('squadImportBtn');
    const importTextarea = document.getElementById('squadImportTextarea');
    const confirmImportBtn = document.getElementById('squadConfirmImportBtn');

    if (importBtn && importModal) {
        importBtn.addEventListener('click', function() {
            importModal.hidden = false;
            document.body.style.overflow = 'hidden';
        });
    }

    document.querySelectorAll('[data-close-squad-import]').forEach(btn => {
        btn.addEventListener('click', function() {
            importModal.hidden = true;
            document.body.style.overflow = '';
        });
    });

    if (confirmImportBtn) {
        confirmImportBtn.addEventListener('click', function() {
            const text = importTextarea.value.trim();
            if (!text) return;
            try {
                // 尝试JSON格式
                let data;
                try {
                    data = JSON.parse(text);
                } catch {
                    // 如果不是JSON，尝试编队代码格式 name:skill:mastery|name:skill:mastery
                    if (text.includes('|') || text.includes(':')) {
                        data = parseSquadCode(text).map(op => ({
                            name: op.name,
                            skill: op.skill || 1,
                            level: 90,
                            mastery: op.mastery || 0,
                            potential: 1,
                            module: '无'
                        }));
                    } else {
                        // 纯文本干员名，用分隔符拆分
                        data = text.split(/[,，、\s\n]+/).filter(Boolean).map(name => ({
                            name: name.trim(),
                            skill: 1,
                            level: 90,
                            mastery: 0,
                            potential: 1,
                            module: '无'
                        }));
                    }
                }
                if (!Array.isArray(data)) throw new Error('格式错误');
                const newSquad = new Array(12).fill(null);
                const importedNames = new Set();
                let insertIndex = 0;
                data.forEach(item => {
                    if (insertIndex >= 12) return;
                    if (item && item.name) {
                        if (importedNames.has(item.name)) return;
                        importedNames.add(item.name);
                        newSquad[insertIndex] = {
                            name: item.name,
                            skill: item.skill || 1,
                            level: item.level || 90,
                            mastery: item.mastery || 0,
                            potential: item.potential || 1,
                            module: item.module || '无'
                        };
                        insertIndex++;
                    }
                });
                squadData = normalizeSquad(newSquad);
                saveSquad();
                renderSquad();
                importModal.hidden = true;
                document.body.style.overflow = '';
                alert('编队导入成功！');
            } catch (e) {
                alert('导入失败：格式不正确。请粘贴JSON数组、编队代码（干员名:技能:专精|...）或纯文本干员名');
            }
        });
    }

    // ========== 编队代码（短格式分享码） ==========
    function generateSquadCode(members) {
        // 格式：干员名:技能:专精|干员名:技能:专精|...
        const parts = members.filter(Boolean).map(m => {
            return `${m.name}:${m.skill || 1}:${m.mastery || 0}`;
        });
        return parts.join('|');
    }

    function parseSquadCode(code) {
        if (!code || !code.trim()) return [];
        code = code.trim();
        // 先尝试JSON数组格式
        try {
            const arr = JSON.parse(code);
            if (Array.isArray(arr)) {
                return arr.map(item => ({
                    name: item.name || '',
                    skill: item.skill || 1,
                    mastery: item.mastery || 0
                })).filter(op => op.name);
            }
        } catch {}
        // 编队代码格式 name:skill:mastery|name:skill:mastery
        return code.split(/[|\n]/).map(line => {
            const [name, skill, mastery] = line.trim().split(':');
            if (!name) return null;
            return {
                name: name.trim(),
                skill: parseInt(skill, 10) || 1,
                mastery: parseInt(mastery, 10) || 0
            };
        }).filter(Boolean);
    }

    const squadCodeBtn = document.getElementById('squadCodeBtn');
    if (squadCodeBtn) {
        squadCodeBtn.addEventListener('click', function() {
            const members = squadData.filter(Boolean);
            if (!members.length) {
                alert('编队为空，无法生成代码');
                return;
            }
            const code = generateSquadCode(members);
            navigator.clipboard.writeText(code).then(() => {
                alert('编队代码已复制！可直接粘贴到配队广场分享。\n\n' + code.substring(0, 80) + (code.length > 80 ? '...' : ''));
            }).catch(() => {
                alert('编队代码：\n' + code);
            });
        });
    }

    // ========== 历史编队 ==========
    const SQUAD_HISTORY_KEY = 'arknights-squad-history';

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function loadSquadHistory() {
        try {
            const saved = localStorage.getItem(SQUAD_HISTORY_KEY);
            if (saved) return JSON.parse(saved);
        } catch (e) {}
        return [];
    }

    function saveSquadHistory(history) {
        try {
            localStorage.setItem(SQUAD_HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
        } catch (e) {}
    }

    function renderSquadHistory() {
        const container = document.getElementById('squadHistoryList');
        if (!container) return;
        const history = loadSquadHistory();
        if (!history.length) {
            container.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem; padding:10px 0;">暂无历史保存的编队</p>';
            return;
        }
        container.innerHTML = history.map((item, idx) => {
            const memberNames = (item.members || []).filter(Boolean).map(m => m.name).join('、');
            const shortNames = memberNames.length > 30 ? memberNames.slice(0, 30) + '…' : memberNames;
            const timeStr = item.timestamp ? new Date(item.timestamp).toLocaleString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
            return `
                <div class="squad-history-item" data-history-index="${idx}">
                    <div class="squad-history-info">
                        <div class="squad-history-name">${escapeHtml(item.name || `历史编队 ${idx + 1}`)}</div>
                        <div class="squad-history-meta">${timeStr} · ${(item.members || []).filter(Boolean).length}人</div>
                        <div class="squad-history-members" title="${escapeHtml(memberNames)}">${escapeHtml(shortNames || '空编队')}</div>
                    </div>
                    <div class="squad-history-actions">
                        <button class="squad-history-load" data-load-history="${idx}" title="加载">加载</button>
                        <button class="squad-history-delete" data-delete-history="${idx}" title="删除">×</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    function addSquadToHistory(name) {
        const members = squadData.filter(Boolean);
        if (!members.length) {
            alert('编队为空，无法保存');
            return false;
        }
        const history = loadSquadHistory();
        history.unshift({
            name: name || `编队 ${new Date().toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`,
            timestamp: Date.now(),
            members: members.map(m => ({ ...m }))
        });
        saveSquadHistory(history);
        renderSquadHistory();
        return true;
    }

    function loadSquadFromHistory(index) {
        const history = loadSquadHistory();
        const item = history[index];
        if (!item || !item.members) return;
        squadData = new Array(12).fill(null);
        const usedNames = new Set();
        let insertIndex = 0;
        item.members.forEach(m => {
            if (insertIndex >= 12) return;
            if (m && m.name && !usedNames.has(m.name)) {
                usedNames.add(m.name);
                squadData[insertIndex] = { ...m };
                insertIndex++;
            }
        });
        renderSquad();
    }

    function deleteSquadHistory(index) {
        const history = loadSquadHistory();
        history.splice(index, 1);
        saveSquadHistory(history);
        renderSquadHistory();
    }

    // 保存到历史按钮
    const saveHistoryBtn = document.getElementById('squadSaveHistoryBtn');
    if (saveHistoryBtn) {
        saveHistoryBtn.addEventListener('click', function() {
            const members = squadData.filter(Boolean);
            if (!members.length) {
                alert('编队为空，无法保存');
                return;
            }
            const name = prompt('请输入编队名称（留空使用默认名称）：');
            if (name === null) return; // 用户点击取消
            if (addSquadToHistory(name)) {
                alert('编队已保存到历史记录！');
            }
        });
    }

    // 历史编队列表事件委托
    const historyListEl = document.getElementById('squadHistoryList');
    if (historyListEl) {
        historyListEl.addEventListener('click', function(e) {
            const loadBtn = e.target.closest('[data-load-history]');
            if (loadBtn) {
                const idx = parseInt(loadBtn.dataset.loadHistory);
                loadSquadFromHistory(idx);
                return;
            }
            const deleteBtn = e.target.closest('[data-delete-history]');
            if (deleteBtn) {
                const idx = parseInt(deleteBtn.dataset.deleteHistory);
                if (confirm('确定要删除这条历史编队吗？')) {
                    deleteSquadHistory(idx);
                }
                return;
            }
        });
    }

    // 键盘支持
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            if (selectModal && !selectModal.hidden) closeSelect();
            if (configModal && !configModal.hidden) closeConfig();
            if (importModal && !importModal.hidden) {
                importModal.hidden = true;
                document.body.style.overflow = '';
            }
        }
    });

    console.log('编队模拟模块已加载');

    // ========== 干员头像URL查找表 ==========
    function buildAvatarMap() {
        const map = {};
        document.querySelectorAll('.atlas-operator-card[data-atlas-name][data-atlas-avatar]').forEach(card => {
            map[card.dataset.atlasName] = card.dataset.atlasAvatar;
        });
        return map;
    }

    // ========== 配队广场（Supabase 云端） ==========
    const SUPABASE_URL = 'https://fgoaxqxxgfxjulbpjbic.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnb2F4cXh4Z2Z4anVsYnBqYmljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNjY1NzYsImV4cCI6MjA5ODc0MjU3Nn0.8UYUzZiESpRdfOLTsOg16PYxx8GQbiZ4SCeK--CLsVU';
    const supabase = (window.supabase && window.supabase.createClient)
        ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
        : null;
    console.log('[配队广场] Supabase 连接状态:', supabase ? '已连接' : '未连接（SDK未加载或初始化失败）');
    let cachedSquads = [];
    let loadingSquads = false;

    async function loadCommunitySquads() {
        if (!supabase) return [];
        if (loadingSquads) return cachedSquads;
        loadingSquads = true;
        try {
            const { data, error } = await supabase
                .from('community_squads')
                .select('*')
                .order('likes', { ascending: false })
                .order('created_at', { ascending: false });
            if (error) throw error;
            cachedSquads = (data || []).map(row => ({
                id: row.id,
                title: row.title,
                author: row.author || '匿名博士',
                code: row.code || '',
                desc: row.description || '',
                scenes: row.scenes || [],
                likes: row.likes || 0,
                likedBy: row.liked_by || [],
                authorId: row.author_id || '',
                time: row.created_at
            }));
        } catch (e) {
            console.error('加载配队失败:', e);
            // 降级到localStorage
            try { cachedSquads = JSON.parse(localStorage.getItem('arknights_community_squads')) || []; } catch { cachedSquads = []; }
        }
        loadingSquads = false;
        return cachedSquads;
    }

    async function saveCommunitySquad(squad) {
        if (!supabase) return false;
        try {
            const visitorId = localStorage.getItem('arknights_visitor_id') || (function() {
                const id = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('arknights_visitor_id', id);
                return id;
            })();
            const { error } = await supabase.from('community_squads').insert({
                title: squad.title,
                author: squad.author || '匿名博士',
                author_id: visitorId,
                code: squad.code || '',
                description: squad.desc || '',
                scenes: squad.scenes || [],
                likes: 0,
                liked_by: []
            });
            if (error) throw error;
            cachedSquads = [];
            console.log('[配队广场] 发布成功');
            return true;
        } catch (e) {
            console.error('[配队广场] 发布失败:', e.message || e);
            return false;
        }
    }

    async function toggleLikeFromCloud(idx) {
        if (!supabase || !cachedSquads[idx]) return;
        const squad = cachedSquads[idx];
        const visitorId = localStorage.getItem('arknights_visitor_id') || (function() {
            const id = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('arknights_visitor_id', id);
            return id;
        })();

        try {
            const alreadyLiked = (squad.likedBy || []).includes(visitorId);
            const newLikes = alreadyLiked ? Math.max(0, squad.likes - 1) : squad.likes + 1;
            const newLikedBy = alreadyLiked
                ? (squad.likedBy || []).filter(v => v !== visitorId)
                : [...(squad.likedBy || []), visitorId];

            const { error } = await supabase
                .from('community_squads')
                .update({ likes: newLikes, liked_by: newLikedBy })
                .eq('id', squad.id);
            if (error) throw error;
            cachedSquads[idx].likes = newLikes;
            cachedSquads[idx].likedBy = newLikedBy;
        } catch (e) {
            console.error('点赞失败:', e);
        }
    }

    async function deleteSquadFromCloud(idx) {
        if (!supabase || !cachedSquads[idx]) return;
        try {
            const { error } = await supabase
                .from('community_squads')
                .delete()
                .eq('id', cachedSquads[idx].id);
            if (error) throw error;
            cachedSquads.splice(idx, 1);
        } catch (e) {
            console.error('删除失败:', e);
        }
    }

    function renderCommunityCards(containerId, squads, showDelete) {
        const container = document.getElementById(containerId);
        const emptyEl = document.getElementById(containerId === 'communityList' ? 'communityEmpty' : 'myCommunityEmpty');
        if (!container) return;
        container.innerHTML = '';
        // Use vertical list style for community page
        container.className = 'community-list-vertical';

        if (!squads.length) {
            if (emptyEl) emptyEl.style.display = 'block';
            return;
        }
        if (emptyEl) emptyEl.style.display = 'none';

        const visitorId = localStorage.getItem('arknights_visitor_id') || '';

        squads.forEach((squad, idx) => {
            const card = document.createElement('div');
            card.className = 'comm-card-vertical';
            const scenesHtml = (squad.scenes || []).map(s => `<span class="comm-scene-tag">${escapeHtml(s)}</span>`).join('');
            const dateStr = squad.time ? new Date(squad.time).toLocaleDateString('zh-CN') : '';
            // Parse ops from code (supports both JSON and name:skill:mastery| format)
            let ops = [];
            if (squad.code) {
                ops = parseSquadCode(squad.code).map(op => op.name).filter(Boolean);
            } else if (squad.ops) {
                ops = squad.ops;
            }
            const opsHtml = ops.map(o => `<span class="comm-card-v-op">${escapeHtml(o)}</span>`).join('');
            // Avatar row: show first 6 operator avatars
            const avatarOps = ops.slice(0, 6);
            const avatarMap = buildAvatarMap();
            const avatarHtml = avatarOps.length > 0
                ? `<div class="comm-card-avatars">${avatarOps.map((o, i) => {
                    const avatarUrl = avatarMap[o];
                    if (avatarUrl) {
                        return `<div class="comm-avatar-sm comm-avatar-img" style="border-color:rgba(255,255,255,0.15)"><img src="${avatarUrl}" alt="${escapeHtml(o)}" onerror="this.style.display='none';this.parentElement.textContent='${escapeHtml(o.charAt(0))}';this.parentElement.classList.add('comm-avatar-fallback')"></div>`;
                    }
                    const colors = ['#e8883c','#5eb7ff','#d44','#4caf50','#c49b30','#9c27b0'];
                    return `<div class="comm-avatar-sm" style="background:${colors[i % colors.length]}">${escapeHtml(o.charAt(0))}</div>`;
                }).join('')}${ops.length > 6 ? `<div class="comm-avatar-sm" style="background:#555">+${ops.length-6}</div>` : ''}</div>`
                : '';
            // 判断是否显示删除按钮：管理员可删所有，访问者可删自己的
            const isOwnSquad = visitorId && squad.authorId === visitorId;
            const canDelete = showDelete || isAdmin() || isOwnSquad;
            card.innerHTML = `
                <div class="comm-card-body">
                    <h4 class="comm-card-v-title">${escapeHtml(squad.title)}</h4>
                    <div class="comm-card-v-meta">${escapeHtml(squad.author || '匿名博士')} · ${dateStr}</div>
                    ${scenesHtml ? `<div class="comm-card-scenes">${scenesHtml}</div>` : ''}
                    ${avatarHtml}
                    ${opsHtml ? `<div class="comm-card-v-ops">${opsHtml}</div>` : ''}
                    <div class="comm-card-v-desc">${escapeHtml(squad.desc)}</div>
                    <div class="comm-card-v-actions">
                        <button data-like-idx="${idx}">&#128077; ${isLiked(idx) ? '已点赞' : '点赞'} (${squad.likes || 0})</button>
                        ${squad.code ? `<button data-copy-code="${idx}">&#128203; 复制编队代码</button>` : ''}
                        ${canDelete ? `<button data-del-idx="${idx}" style="color:#f87171">&#128465; 删除</button>` : ''}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    async function refreshCommunity() {
        const all = await loadCommunitySquads();
        renderCommunityCards('communityList', all, false);
        const myAuthor = document.getElementById('publishAuthor')?.value?.trim() || '';
        const mine = myAuthor ? all.filter(s => s.author === myAuthor) : [];
        renderCommunityCards('myCommunityList', mine, true);
    }

    // 配队广场tab切换（使用事件委托，支持动态显示的tab）
    const tabsContainer = document.querySelector('.community-tabs');
    if (tabsContainer) {
        tabsContainer.addEventListener('click', function(e) {
            const tab = e.target.closest('.comm-tab');
            if (!tab) return;
            const tabName = tab.dataset.commTab;
            if (!tabName) return;
            tabsContainer.querySelectorAll('.comm-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.comm-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const contentEl = document.getElementById('comm-' + tabName);
            if (contentEl) contentEl.classList.add('active');
            if (tabName === 'list' || tabName === 'my') refreshCommunity();
        });
    }

    // 发布按钮
    const publishBtn = document.getElementById('publishBtn');
    if (publishBtn) {
        publishBtn.addEventListener('click', async function() {
            const title = document.getElementById('publishTitle')?.value?.trim();
            const desc = document.getElementById('publishDesc')?.value?.trim();
            const code = document.getElementById('publishCode')?.value?.trim();
            const author = document.getElementById('publishAuthor')?.value?.trim() || '匿名博士';
            const scenes = Array.from(document.querySelectorAll('input[data-scene]:checked')).map(cb => cb.value);

            if (!title) { alert('请填写配队名称'); return; }
            if (!code) { alert('请填写编队代码'); return; }

            publishBtn.disabled = true;
            publishBtn.textContent = '发布中...';

            const ok = await saveCommunitySquad({ title, desc, code, scenes, author });

            // 清空表单
            document.getElementById('publishTitle').value = '';
            document.getElementById('publishDesc').value = '';
            document.getElementById('publishCode').value = '';
            document.querySelectorAll('input[data-scene]').forEach(cb => cb.checked = false);

            publishBtn.disabled = false;
            publishBtn.textContent = '发布配队';

            if (ok) {
                alert('发布成功！');
                await refreshCommunity();
                // 切换到列表tab
                const listTab = document.querySelector('[data-comm-tab="list"]');
                if (listTab) listTab.click();
            } else {
                alert('发布失败，请稍后重试');
            }
        });
    }

    // 点赞/复制/删除事件委托
    const LIKED_KEY = 'arknights_liked_ids';
    function getLikedIds() {
        try { return JSON.parse(localStorage.getItem(LIKED_KEY)) || []; }
        catch { return []; }
    }
    function isLiked(idx) {
        const visitorId = localStorage.getItem('arknights_visitor_id');
        return visitorId && cachedSquads[idx] && (cachedSquads[idx].likedBy || []).includes(visitorId);
    }

    document.getElementById('communityList')?.addEventListener('click', async function(e) {
        const likeBtn = e.target.closest('[data-like-idx]');
        if (likeBtn) {
            const idx = parseInt(likeBtn.getAttribute('data-like-idx'));
            await toggleLikeFromCloud(idx);
            refreshCommunity();
            return;
        }
        const copyBtn = e.target.closest('[data-copy-code]');
        if (copyBtn) {
            const idx = parseInt(copyBtn.getAttribute('data-copy-code'));
            if (cachedSquads[idx] && cachedSquads[idx].code) {
                navigator.clipboard.writeText(cachedSquads[idx].code).then(() => {
                    alert('编队代码已复制！可在编队模拟页面粘贴导入。');
                }).catch(() => alert('复制失败，请手动复制'));
            }
            return;
        }
        const delBtn = e.target.closest('[data-del-idx]');
        if (delBtn) {
            if (!confirm('确定删除这条配队吗？')) return;
            const idx = parseInt(delBtn.getAttribute('data-del-idx'));
            await deleteSquadFromCloud(idx);
            await refreshCommunity();
            return;
        }
    });

    document.getElementById('myCommunityList')?.addEventListener('click', async function(e) {
        const delBtn = e.target.closest('[data-del-idx]');
        if (delBtn) {
            if (!confirm('确定删除这条配队吗？')) return;
            const idx = parseInt(delBtn.getAttribute('data-del-idx'));
            await deleteSquadFromCloud(idx);
            refreshCommunity();
        }
    });

    refreshCommunity();

    // ========== 管理员登录 ==========
    const ADMIN_KEY = 'arknights_admin';
    const ADMIN_USERS = [{ user: 's.k_joyce', pass: 'dsy071213' }]; // 可扩展更多管理员

    function isAdmin() {
        try { return JSON.parse(localStorage.getItem(ADMIN_KEY)) || false; }
        catch { return false; }
    }

    function updateAdminUI() {
        const loginBtn = document.getElementById('adminLoginBtn');
        if (isAdmin()) {
            if (loginBtn) loginBtn.textContent = '管理员已登录';
            if (loginBtn) loginBtn.style.background = '#4caf50';
            if (loginBtn) loginBtn.style.borderColor = '#4caf50';
        } else {
            if (loginBtn) { loginBtn.textContent = '管理员登录'; loginBtn.style.background = ''; loginBtn.style.borderColor = ''; }
        }
    }

    document.getElementById('adminLoginBtn')?.addEventListener('click', function() {
        if (isAdmin()) {
            // 已登录，点击退出
            localStorage.removeItem(ADMIN_KEY);
            updateAdminUI();
            alert('已退出管理员');
            return;
        }
        // 弹出登录框
        const user = prompt('请输入管理员用户名：');
        if (!user) return;
        const pass = prompt('请输入管理员密码：');
        if (!pass) return;
        const found = ADMIN_USERS.find(a => a.user === user && a.pass === pass);
        if (found) {
            localStorage.setItem(ADMIN_KEY, 'true');
            updateAdminUI();
            alert('登录成功！管理员可删除任意配队');
        } else {
            alert('用户名或密码错误');
        }
    });

    // refreshCommunity already handles list and my tabs

    // ========== 我的Box & Box求助 ==========
    let myBoxOperators = [];
    let currentBoxFilter = 'all';
    let currentBoxRequestId = null;

    function getVisitorId() {
        let id = localStorage.getItem('arknights_visitor_id');
        if (!id) {
            id = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('arknights_visitor_id', id);
        }
        return id;
    }

    async function loadMyBox() {
        if (!supabase) return [];
        try {
            const { data, error } = await supabase
                .from('player_boxes')
                .select('operators, player_name')
                .eq('visitor_id', getVisitorId())
                .maybeSingle();
            if (error) throw error;
            myBoxOperators = (data && data.operators) || [];
            if (data && data.player_name) {
                const nameInput = document.getElementById('playerNameInput');
                if (nameInput && !nameInput.value) nameInput.value = data.player_name;
            }
        } catch (e) {
            console.error('[Box] 加载失败:', e);
            myBoxOperators = [];
        }
    }

    async function saveMyBox(operators) {
        if (!supabase) return false;
        const playerName = document.getElementById('playerNameInput')?.value?.trim() || '匿名博士';
        // 保存名称到 localStorage 备用
        localStorage.setItem('arknights_player_name', playerName);
        try {
            const { data: existing } = await supabase
                .from('player_boxes')
                .select('id')
                .eq('visitor_id', getVisitorId())
                .maybeSingle();
            if (existing) {
                await supabase.from('player_boxes').update({ operators, player_name: playerName, updated_at: new Date().toISOString() }).eq('id', existing.id);
            } else {
                await supabase.from('player_boxes').insert({
                    player_name: playerName,
                    visitor_id: getVisitorId(),
                    operators
                });
            }
            myBoxOperators = operators;
            return true;
        } catch (e) {
            console.error('[Box] 保存失败:', e);
            return false;
        }
    }

    // 星级数值（用于排序）
    function rarityNum(r) {
        const m = r ? r.match(/\d/) : null;
        return m ? parseInt(m[0]) : 0;
    }

    // 从全干员图鉴DOM中提取干员列表（按星级降序+名字排序）
    function getAllOperatorsFromDOM() {
        const cards = document.querySelectorAll('.atlas-operator-card');
        const ops = [];
        cards.forEach(card => {
            ops.push({
                name: card.dataset.atlasName || '',
                cls: card.dataset.atlasClass || '',
                rarity: card.dataset.atlasRarity || '',
                branch: card.dataset.atlasBranch || ''
            });
        });
        // 按星级降序，同星级按名字排序
        ops.sort((a, b) => {
            const ra = rarityNum(a.rarity), rb = rarityNum(b.rarity);
            if (ra !== rb) return rb - ra;
            return a.name.localeCompare(b.name, 'zh-CN');
        });
        return ops;
    }

    function renderBoxOperators() {
        const grid = document.getElementById('boxOperatorGrid');
        if (!grid) return;
        const search = (document.getElementById('boxSearch')?.value || '').trim();
        grid.innerHTML = '';

        let allOps = getAllOperatorsFromDOM();
        const filtered = allOps.filter(op => {
            if (currentBoxFilter !== 'all' && op.cls !== currentBoxFilter) return false;
            if (search && !op.name.includes(search)) return false;
            return true;
        });

        const avatarMap = buildAvatarMap();
        filtered.forEach(op => {
            const el = document.createElement('div');
            el.className = 'box-op-item' + (myBoxOperators.includes(op.name) ? ' selected' : '');
            el.dataset.name = op.name;
            const avatarUrl = avatarMap[op.name];
            const starsHtml = '&#9733;'.repeat(rarityNum(op.rarity));
            el.innerHTML = `
                <img src="${avatarUrl || ''}" alt="${escapeHtml(op.name)}" onerror="this.style.display='none'" loading="lazy">
                <span class="box-op-name">${escapeHtml(op.name)}</span>
                <span class="box-op-stars">${starsHtml}</span>
            `;
            el.addEventListener('click', function() {
                if (myBoxOperators.includes(op.name)) {
                    myBoxOperators = myBoxOperators.filter(n => n !== op.name);
                    el.classList.remove('selected');
                } else {
                    myBoxOperators.push(op.name);
                    el.classList.add('selected');
                }
                updateBoxCount();
            });
            grid.appendChild(el);
        });
        updateBoxCount();
    }

    function updateBoxCount() {
        const allOps = getAllOperatorsFromDOM();
        const el = document.getElementById('boxCount');
        if (el) el.textContent = '已选 ' + myBoxOperators.length + ' / ' + allOps.length;
        // 更新Box汇总
        updateMyBoxSummary();
    }

    function updateMyBoxSummary() {
        const opsEl = document.getElementById('myboxSummaryOps');
        const countEl = document.getElementById('myboxSummaryCount');
        const emptyEl = document.getElementById('myboxSummaryEmpty');
        if (!opsEl) return;
        if (countEl) countEl.textContent = myBoxOperators.length;
        if (myBoxOperators.length === 0) {
            opsEl.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">勾选干员后这里会显示你的完整Box</p>';
            return;
        }
        opsEl.innerHTML = '';
        const avatarMap = buildAvatarMap();
        myBoxOperators.forEach(name => {
            const url = avatarMap[name];
            const el = document.createElement('div');
            el.className = 'ms-op';
            el.innerHTML = `${url ? `<img src="${url}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">` : ''}${escapeHtml(name)}`;
            opsEl.appendChild(el);
        });
    }

    // ========== AI配队算法 ==========
    function getBoxOperatorData() {
        const cards = document.querySelectorAll('.atlas-operator-card');
        const result = [];
        cards.forEach(card => {
            if (myBoxOperators.includes(card.dataset.atlasName)) {
                result.push({
                    name: card.dataset.atlasName,
                    cls: card.dataset.atlasClass,
                    branch: card.dataset.atlasBranch,
                    rarity: card.dataset.atlasRarity,
                    tags: (card.dataset.atlasTags || '').split(/[、,，]/).map(t => t.trim()).filter(Boolean),
                    avatar: card.dataset.atlasAvatar || '',
                    position: card.dataset.atlasPosition || ''
                });
            }
        });
        return result;
    }

    function aiAnalyzeAndRecommend(scene) {
        const boxData = getBoxOperatorData();
        if (boxData.length < 6) return { error: '干员数量不足，至少需要6名干员' };

        const results = [];
        const r = rarityNum.bind(null);

        // 按星级降序排序
        boxData.sort((a, b) => r(b.rarity) - r(a.rarity));

        // 分析Box特点
        const classCount = {};
        const tagCount = {};
        boxData.forEach(op => {
            classCount[op.cls] = (classCount[op.cls] || 0) + 1;
            op.tags.forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; });
        });
        const star6 = boxData.filter(op => r(op.rarity) >= 6);
        const star5 = boxData.filter(op => r(op.rarity) === 5);

        // 通用推荐场景
        if (scene === 'general' || scene === 'all') {
            results.push(buildTeam(boxData, classCount, tagCount, '通用均衡队', '先锋+近卫+重装+狙击+术师+医疗的均衡12人队，适合大部分关卡。优先选用高星干员和输出型干员。',
                { vanguard: 2, guard: 3, defender: 2, sniper: 2, caster: 1, medic: 2 }, boxData));
            if (star6.length >= 8) {
                results.push(buildTeam(boxData, classCount, tagCount, '精锐突击队', '以6星为核心的高练度突击编队，适合难度较高的主线关卡。',
                    { vanguard: 2, guard: 4, defender: 1, sniper: 2, caster: 1, medic: 2 }, boxData));
            }
        }

        // 剿灭挂机
        if (scene === 'mop' || scene === 'all') {
            results.push(buildTeam(boxData, classCount, tagCount, '剿灭挂机队', '以AOE输出为核心，配以费用回复和持续治疗，适合剿灭作战。',
                { vanguard: 2, guard: 3, defender: 2, sniper: 2, caster: 1, medic: 2, preferTags: ['群攻', '爆发输出', '费用回复', '治疗', '支援'] }, boxData));
        }

        // 高难挑战
        if (scene === 'hard' || scene === 'all') {
            results.push(buildTeam(boxData, classCount, tagCount, '高难攻坚队', '注重生存和持续输出，配备减速和控场干员，适合高难关卡。',
                { vanguard: 2, guard: 3, defender: 2, sniper: 2, caster: 1, medic: 2, preferTags: ['快速复活', '控场', '减速', '生存', '爆发输出', '支援'] }, boxData));
        }

        // 肉鸽
        if (scene === 'is' || scene === 'all') {
            results.push(buildTeam(boxData, classCount, tagCount, '肉鸽探索队', '注重干员灵活性，多核心输出+治疗，适合集成战略模式。',
                { vanguard: 2, guard: 3, defender: 1, sniper: 2, caster: 2, medic: 2, preferTags: ['快速复活', '生存', '控场', '输出', '召唤'] }, boxData));
        }

        return { teams: results, boxAnalysis: { star6: star6.length, star5: star5.length, total: boxData.length, classCount, topTags: Object.entries(tagCount).sort((a,b) => b[1]-a[1]).slice(0, 8) } };
    }

    function buildTeam(boxData, classCount, tagCount, name, desc, config, allOps) {
        const preferTags = config.preferTags || [];
        const selected = [];
        const selectedNames = new Set();
        const classMap = { vanguard: '先锋', guard: '近卫', defender: '重装', sniper: '狙击', caster: '术师', medic: '医疗', specialist: '特种', supporter: '辅助' };

        function pickOp(cls, count, tagPriority) {
            let pool = boxData.filter(op => op.cls === cls && !selectedNames.has(op.name));
            if (tagPriority && tagPriority.length > 0) {
                pool.sort((a, b) => {
                    const aScore = (tagPriority.filter(t => a.tags.includes(t)).length) * 10 + rarityNum(a.rarity);
                    const bScore = (tagPriority.filter(t => b.tags.includes(t)).length) * 10 + rarityNum(b.rarity);
                    return bScore - aScore;
                });
            } else {
                pool.sort((a, b) => rarityNum(b.rarity) - rarityNum(a.rarity));
            }
            const picked = pool.slice(0, count);
            picked.forEach(op => { selected.push(op); selectedNames.add(op.name); });
        }

        // 先选费用回复先锋
        if (config.vanguard) {
            let vPool = boxData.filter(op => op.cls === '先锋' && !selectedNames.has(op.name));
            vPool.sort((a, b) => {
                const aHasFR = a.tags.includes('费用回复') ? 100 : 0;
                const bHasFR = b.tags.includes('费用回复') ? 100 : 0;
                return (bHasFR + rarityNum(b.rarity)) - (aHasFR + rarityNum(a.rarity));
            });
            selected.push(...vPool.slice(0, config.vanguard));
            vPool.slice(0, config.vanguard).forEach(op => selectedNames.add(op.name));
        }
        // 医疗：优先有治疗标签的
        if (config.medic) {
            let mPool = boxData.filter(op => op.cls === '医疗' && !selectedNames.has(op.name));
            mPool.sort((a, b) => {
                const aH = a.tags.includes('治疗') ? 100 : 0;
                const bH = b.tags.includes('治疗') ? 100 : 0;
                return (bH + rarityNum(b.rarity)) - (aH + rarityNum(a.rarity));
            });
            selected.push(...mPool.slice(0, config.medic));
            mPool.slice(0, config.medic).forEach(op => selectedNames.add(op.name));
        }
        // 其他职业
        ['guard', 'defender', 'sniper', 'caster'].forEach(role => {
            if (config[role]) pickOp(classMap[role], config[role], preferTags);
        });
        // 如果不够12人，从剩余干员中按星级补齐
        if (selected.length < 12) {
            const remaining = boxData.filter(op => !selectedNames.has(op.name)).sort((a, b) => rarityNum(b.rarity) - rarityNum(a.rarity));
            for (const op of remaining) {
                if (selected.length >= 12) break;
                selected.push(op);
                selectedNames.add(op.name);
            }
        }

        // 生成编队代码
        const code = selected.map(op => op.name + ':1:1').join('|');

        return { name, desc, operators: selected.slice(0, 12), code };
    }

    function renderAiResults(result) {
        const container = document.getElementById('aiSquadCards');
        const section = document.getElementById('aiSquadResult');
        if (!container || !section) return;
        section.removeAttribute('hidden');

        // 渲染Box分析
        let html = '<div class="ai-scan-info">';
        if (result.error) {
            html += result.error;
            html += '</div>';
            container.innerHTML = html;
            return;
        }
        const a = result.boxAnalysis;
        html += '&#128202; <strong>你的Box分析：</strong>共' + a.total + '名干员，其中6星' + a.star6 + '人、5星' + a.star5 + '人。';
        html += ' 擅长方向：' + a.topTags.map(t => t[0] + '(' + t[1] + ')').join('、') + '。';
        html += '</div>';

        // 渲染推荐队伍
        result.teams.forEach(team => {
            html += '<div class="ai-team-card">';
            html += '<h4>&#127942; ' + escapeHtml(team.name) + ' (' + team.operators.length + '人)</h4>';
            html += '<div class="ai-team-desc">' + escapeHtml(team.desc) + '</div>';
            html += '<div class="ai-team-ops">';
            team.operators.forEach(op => {
                html += '<span class="ai-team-op">' +
                    (op.avatar ? '<img src="' + op.avatar + '" alt="' + escapeHtml(op.name) + '" onerror="this.style.display=\'none\'">' : '') +
                    escapeHtml(op.name) + ' <small style="color:var(--text-muted)">' + escapeHtml(op.branch) + '</small></span>';
            });
            html += '</div>';
            html += '<div class="ai-team-code" title="点击复制编队代码" data-copy-code="' + escapeHtml(team.code) + '">&#128203; ' + escapeHtml(team.code) + '</div>';
            html += '</div>';
        });

        container.innerHTML = html;

        // 编队代码点击复制
        container.querySelectorAll('[data-copy-code]').forEach(el => {
            el.addEventListener('click', function() {
                const code = this.dataset.copyCode;
                navigator.clipboard?.writeText(code).then(() => {
                    this.textContent = '已复制!';
                    setTimeout(() => { this.innerHTML = '&#128203; ' + escapeHtml(code); }, 1500);
                });
            });
        });
    }

    // AI配队按钮事件
    document.getElementById('aiSquadBtn')?.addEventListener('click', function() {
        if (myBoxOperators.length < 6) { alert('请先至少选择6名干员'); return; }
        const scene = document.getElementById('aiSquadSceneSelect')?.value || 'general';
        const result = aiAnalyzeAndRecommend(scene === 'general' ? 'all' : scene);
        renderAiResults(result);
        document.getElementById('aiSquadResult')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // 场景切换
    document.getElementById('aiSquadSceneSelect')?.addEventListener('change', function() {
        if (myBoxOperators.length < 6) return;
        const scene = this.value;
        const result = aiAnalyzeAndRecommend(scene === 'general' ? 'all' : scene);
        renderAiResults(result);
    });

    // 重新推荐
    document.getElementById('aiSquadRefresh')?.addEventListener('click', function() {
        if (myBoxOperators.length < 6) { alert('请先至少选择6名干员'); return; }
        const scene = document.getElementById('aiSquadSceneSelect')?.value || 'general';
        const result = aiAnalyzeAndRecommend(scene === 'general' ? 'all' : scene);
        renderAiResults(result);
    });

    // Box筛选
    document.querySelectorAll('[data-box-filter]').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('[data-box-filter]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentBoxFilter = this.dataset.boxFilter;
            renderBoxOperators();
        });
    });

    // Box搜索
    document.getElementById('boxSearch')?.addEventListener('input', function() {
        renderBoxOperators();
    });

    // 全选/清空
    document.getElementById('boxSelectAll')?.addEventListener('click', function() {
        const allOps = getAllOperatorsFromDOM();
        const search = (document.getElementById('boxSearch')?.value || '').trim();
        const filtered = allOps.filter(op => {
            if (currentBoxFilter !== 'all' && op.cls !== currentBoxFilter) return false;
            if (search && !op.name.includes(search)) return false;
            return true;
        });
        filtered.forEach(op => {
            if (!myBoxOperators.includes(op.name)) myBoxOperators.push(op.name);
        });
        renderBoxOperators();
    });

    document.getElementById('boxClearAll')?.addEventListener('click', function() {
        const allOps = getAllOperatorsFromDOM();
        const search = (document.getElementById('boxSearch')?.value || '').trim();
        const filtered = allOps.filter(op => {
            if (currentBoxFilter !== 'all' && op.cls !== currentBoxFilter) return false;
            if (search && !op.name.includes(search)) return false;
            return true;
        });
        const filteredNames = filtered.map(op => op.name);
        myBoxOperators = myBoxOperators.filter(n => !filteredNames.includes(n));
        renderBoxOperators();
    });

    // 保存Box
    document.getElementById('saveMyBoxBtn')?.addEventListener('click', async function() {
        const ok = await saveMyBox(myBoxOperators);
        alert(ok ? 'Box已保存到云端！' : '保存失败，请重试');
    });

    // 发布求助
    document.getElementById('publishBoxHelpBtn')?.addEventListener('click', async function() {
        if (!supabase) { alert('云端连接失败'); return; }
        if (myBoxOperators.length === 0) { alert('请先选择你拥有的干员'); return; }
        const title = prompt('求助标题（如：帮我配一个剿灭挂机队）');
        if (!title) return;
        const desc = prompt('补充描述（可选，如：缺少玛恩纳和维什戴尔）') || '';
        const scene = prompt('适用场景（如：剿灭挂机/高难挑战/肉鸽）') || '';
        try {
            await supabase.from('box_requests').insert({
                player_name: document.getElementById('publishAuthor')?.value?.trim() || '匿名博士',
                visitor_id: getVisitorId(),
                title,
                description: desc,
                scene,
                operators: myBoxOperators
            });
            alert('求助发布成功！');
            // 刷新求助列表
            loadBoxRequests();
        } catch (e) {
            console.error(e);
            alert('发布失败');
        }
    });

    // 加载并渲染求助列表
    async function loadBoxRequests() {
        if (!supabase) return;
        try {
            const { data, error } = await supabase
                .from('box_requests')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            renderBoxRequestList(data || []);
        } catch (e) {
            console.error('[BoxHelp] 加载失败:', e);
        }
    }

    function renderBoxRequestList(requests) {
        const list = document.getElementById('boxHelpList');
        const empty = document.getElementById('boxHelpEmpty');
        if (!list) return;
        list.innerHTML = '';
        if (!requests.length) {
            if (empty) empty.style.display = 'block';
            return;
        }
        if (empty) empty.style.display = 'none';
        const avatarMap = buildAvatarMap();
        requests.forEach((req, idx) => {
            const card = document.createElement('div');
            card.className = 'box-request-card';
            const ops = req.operators || [];
            const previewOps = ops.slice(0, 12);
            const previewHtml = previewOps.map(name => {
                const url = avatarMap[name];
                return url ? `<img src="${url}" alt="${escapeHtml(name)}" title="${escapeHtml(name)}" onerror="this.style.display='none'">` : '';
            }).join('');
            const dateStr = req.created_at ? new Date(req.created_at).toLocaleDateString('zh-CN') : '';
            const isOwn = req.visitor_id && req.visitor_id === getVisitorId();
            const canDelete = isAdmin() || isOwn;
            card.innerHTML = `
                <h4>${escapeHtml(req.title)}</h4>
                <div class="req-meta">${escapeHtml(req.player_name || '匿名博士')} · ${dateStr} · ${ops.length}名干员</div>
                <div class="req-desc">${escapeHtml(req.description || '')}</div>
                <div class="req-ops-preview">${previewHtml}</div>
                <div class="req-stats">
                    <span>&#128172; ${(req.replies || []).length} 条建议</span>
                    <span>&#128077; ${req.likes || 0} 点赞</span>
                    ${req.scene ? `<span>&#127942; ${escapeHtml(req.scene)}</span>` : ''}
                    ${canDelete ? `<button class="comm-delete-btn" data-box-req-idx="${idx}" title="删除此求助帖">&#128465;</button>` : ''}
                </div>
            `;
            // 删除按钮事件
            const delBtn = card.querySelector('[data-box-req-idx]');
            if (delBtn) {
                delBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (!confirm('确定删除此求助帖？')) return;
                    deleteBoxRequest(req.id, idx);
                });
            }
            card.addEventListener('click', () => openBoxRequestDetail(req));
            list.appendChild(card);
        });
    }

    async function deleteBoxRequest(id, idx) {
        if (!supabase) return;
        try {
            const { error } = await supabase.from('box_requests').delete().eq('id', id);
            if (error) throw error;
            loadBoxRequests();
        } catch (e) {
            console.error('删除失败:', e);
            alert('删除失败');
        }
    }

    let quickSquadOps = [];

    function openBoxRequestDetail(req) {
        currentBoxRequestId = req.id;
        quickSquadOps = [];
        const content = document.getElementById('boxDetailContent');
        const repliesEl = document.getElementById('boxReplies');
        if (!content) return;

        // 切换tab
        document.querySelectorAll('[data-box-tab]').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('#box-list, #box-detail').forEach(c => c.classList.remove('active'));
        document.querySelector('[data-box-tab="detail"]')?.classList.add('active');
        document.getElementById('box-detail')?.classList.add('active');
        document.getElementById('boxDetailTab')?.removeAttribute('hidden');

        const avatarMap = buildAvatarMap();
        const ops = req.operators || [];

        content.innerHTML = `
            <div class="box-detail-header">
                <h3>${escapeHtml(req.title)}</h3>
                <div class="box-detail-meta">${escapeHtml(req.player_name || '匿名博士')} · ${req.created_at ? new Date(req.created_at).toLocaleDateString('zh-CN') : ''} · ${ops.length}名干员</div>
            </div>
            <div class="box-detail-desc">${escapeHtml(req.description || '')}</div>
        `;

        // 渲染发帖人完整Box
        const ownerDetail = document.getElementById('boxOwnerDetail');
        const ownerOps = document.getElementById('boxOwnerOps');
        if (ownerDetail && ownerOps && ops.length > 0) {
            ownerDetail.removeAttribute('hidden');
            ownerOps.innerHTML = '';
            ops.forEach(name => {
                const url = avatarMap[name];
                const el = document.createElement('div');
                el.className = 'obox-owner-op';
                el.dataset.name = name;
                el.innerHTML = `${url ? `<img src="${url}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">` : ''}${escapeHtml(name)}`;
                el.addEventListener('click', () => toggleQuickSquadOp(name));
                ownerOps.appendChild(el);
            });
        }

        // 渲染快捷编队工具
        renderQuickSquadGrid(ops);

        // 预填回复者名称
        const savedName = localStorage.getItem('arknights_player_name');
        const replyAuthor = document.getElementById('boxReplyAuthor');
        if (replyAuthor && savedName) replyAuthor.value = savedName;

        // 渲染回复
        const replies = req.replies || [];
        repliesEl.innerHTML = '';
        if (replies.length === 0) {
            repliesEl.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px">暂无建议，来做第一个回复的博士吧！</p>';
        } else {
            replies.forEach((reply, idx) => {
                const card = document.createElement('div');
                card.className = 'box-reply-card';
                card.innerHTML = `
                    <div class="reply-meta">${escapeHtml(reply.author || '匿名博士')} · ${reply.time ? new Date(reply.time).toLocaleDateString('zh-CN') : ''}</div>
                    ${reply.contact ? `<div style="color:var(--accent-cyan);font-size:0.8rem;margin-bottom:6px;">&#128222; ${escapeHtml(reply.contact)}</div>` : ''}
                    ${reply.code ? `<div class="reply-code">${escapeHtml(reply.code)}</div>` : ''}
                    <div class="reply-desc">${escapeHtml(reply.desc || '')}</div>
                `;
                repliesEl.appendChild(card);
            });
        }
    }

    function renderQuickSquadGrid(ops) {
        const grid = document.getElementById('boxQuickGrid');
        const section = document.getElementById('boxQuickSquad');
        if (!grid || !section) return;
        if (!ops || ops.length === 0) { section.setAttribute('hidden', ''); return; }
        section.removeAttribute('hidden');
        grid.innerHTML = '';
        const avatarMap = buildAvatarMap();
        ops.forEach(name => {
            const el = document.createElement('div');
            el.className = 'qs-grid-item' + (quickSquadOps.includes(name) ? ' selected' : '');
            el.dataset.name = name;
            const url = avatarMap[name];
            el.innerHTML = `${url ? `<img src="${url}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">` : ''}${escapeHtml(name)}`;
            el.addEventListener('click', () => toggleQuickSquadOp(name));
            grid.appendChild(el);
        });
        updateQuickSquadUI();
    }

    function toggleQuickSquadOp(name) {
        if (quickSquadOps.includes(name)) {
            quickSquadOps = quickSquadOps.filter(n => n !== name);
        } else if (quickSquadOps.length < 12) {
            quickSquadOps.push(name);
        } else {
            return; // 最多12人
        }
        // 同步高亮所有列表中的选中状态
        document.querySelectorAll('.qs-grid-item, .obox-owner-op').forEach(el => {
            el.classList.toggle('selected', quickSquadOps.includes(el.dataset.name));
            el.classList.toggle('qs-selected', quickSquadOps.includes(el.dataset.name));
        });
        updateQuickSquadUI();
    }

    function updateQuickSquadUI() {
        const selectedEl = document.getElementById('boxQuickSelected');
        if (!selectedEl) return;
        selectedEl.innerHTML = '';
        if (quickSquadOps.length === 0) {
            selectedEl.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;">已选 0/12 人</span>';
        } else {
            const countSpan = document.createElement('span');
            countSpan.style.cssText = 'color:var(--text-muted);font-size:0.85rem;margin-right:6px;';
            countSpan.textContent = '已选 ' + quickSquadOps.length + '/12 人';
            selectedEl.appendChild(countSpan);
            quickSquadOps.forEach(name => {
                const tag = document.createElement('span');
                tag.className = 'qs-tag';
                tag.innerHTML = `${escapeHtml(name)}<button type="button" data-qs-remove="${name}">&times;</button>`;
                selectedEl.appendChild(tag);
            });
        }
    }

    // 快捷编队事件委托
    document.addEventListener('click', function(e) {
        const removeBtn = e.target.closest('[data-qs-remove]');
        if (removeBtn) {
            toggleQuickSquadOp(removeBtn.dataset.qsRemove);
            return;
        }
    });

    // 填入回复
    document.getElementById('boxQuickToReply')?.addEventListener('click', function() {
        if (quickSquadOps.length === 0) { alert('请先选择干员'); return; }
        const code = quickSquadOps.map(name => name + ':1:1').join('|');
        const codeInput = document.getElementById('boxReplyCode');
        if (codeInput) codeInput.value = code;
        // 滚动到回复区域
        document.querySelector('.box-reply-section')?.scrollIntoView({ behavior: 'smooth' });
    });

    // 清空快捷编队
    document.getElementById('boxQuickClear')?.addEventListener('click', function() {
        quickSquadOps = [];
        document.querySelectorAll('.qs-grid-item, .obox-owner-op').forEach(el => {
            el.classList.remove('selected', 'qs-selected');
        });
        updateQuickSquadUI();
    });

    // Box求助tab切换
    document.querySelectorAll('[data-box-tab]').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.boxTab;
            if (!tabName) return;
            document.querySelectorAll('[data-box-tab]').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('#box-list, #box-detail').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('box-' + tabName)?.classList.add('active');
            if (tabName === 'list') {
                document.getElementById('boxDetailTab')?.setAttribute('hidden', '');
                loadBoxRequests();
            }
        });
    });

    // 提交回复
    document.getElementById('boxReplyBtn')?.addEventListener('click', async function() {
        if (!supabase || !currentBoxRequestId) return;
        const author = document.getElementById('boxReplyAuthor')?.value?.trim() || '匿名博士';
        const contact = document.getElementById('boxReplyContact')?.value?.trim() || '';
        const code = document.getElementById('boxReplyCode')?.value?.trim() || '';
        const desc = document.getElementById('boxReplyDesc')?.value?.trim() || '';
        if (!code && !desc) { alert('请填写建议内容'); return; }

        try {
            const { data: req } = await supabase
                .from('box_requests')
                .select('replies')
                .eq('id', currentBoxRequestId)
                .single();
            const replies = req.replies || [];
            replies.push({
                author,
                contact,
                code,
                desc,
                time: new Date().toISOString()
            });
            await supabase.from('box_requests').update({ replies }).eq('id', currentBoxRequestId);
            alert('建议提交成功！');
            document.getElementById('boxReplyCode').value = '';
            document.getElementById('boxReplyDesc').value = '';
            document.getElementById('boxReplyContact').value = '';
            // 刷新详情
            const { data: updated } = await supabase.from('box_requests').select('*').eq('id', currentBoxRequestId).single();
            if (updated) openBoxRequestDetail(updated);
            loadBoxRequests();
        } catch (e) {
            console.error(e);
            alert('提交失败');
        }
    });

    // 页面打开时加载数据
    // 加载其他博士的Box列表
    async function loadOtherBoxes() {
        if (!supabase) return;
        try {
            const { data, error } = await supabase
                .from('player_boxes')
                .select('*')
                .neq('visitor_id', getVisitorId())
                .order('updated_at', { ascending: false })
                .limit(20);
            if (error) throw error;
            const section = document.getElementById('otherBoxesSection');
            const list = document.getElementById('otherBoxesList');
            if (!section || !list) return;
            if (!data || data.length === 0) {
                section.setAttribute('hidden', '');
                return;
            }
            section.removeAttribute('hidden');
            list.innerHTML = '';
            const avatarMap = buildAvatarMap();
            data.forEach(box => {
                const card = document.createElement('div');
                card.className = 'other-box-card';
                const ops = box.operators || [];
                const previewNames = ops.slice(0, 10);
                const previewHtml = previewNames.map(name => {
                    const url = avatarMap[name];
                    return `<span class="obox-op-tag">${url ? `<img src="${url}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">` : ''}${escapeHtml(name)}</span>`;
                }).join('');
                const dateStr = box.updated_at ? new Date(box.updated_at).toLocaleDateString('zh-CN') : '';
                card.innerHTML = `
                    <h4>${escapeHtml(box.player_name || '匿名博士')}</h4>
                    <div class="obox-meta">${ops.length}名干员 · 更新于 ${dateStr}</div>
                    <div class="obox-ops">${previewHtml}</div>
                    ${ops.length > 10 ? `<div style="color:var(--text-muted);font-size:0.8rem;margin-top:6px">...等${ops.length}名干员</div>` : ''}
                `;
                // 点击展开完整Box
                card.addEventListener('click', function() {
                    if (card.querySelector('.other-box-detail-ops')) {
                        card.querySelector('.other-box-detail-ops').remove();
                        return;
                    }
                    const detailDiv = document.createElement('div');
                    detailDiv.className = 'other-box-detail-ops';
                    ops.forEach(name => {
                        const url = avatarMap[name];
                        detailDiv.innerHTML += `<div class="other-box-detail-op">${url ? `<img src="${url}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">` : ''}${escapeHtml(name)}</div>`;
                    });
                    card.appendChild(detailDiv);
                });
                list.appendChild(card);
            });
        } catch (e) {
            console.error('[OtherBoxes] 加载失败:', e);
        }
    }

    document.querySelectorAll('[data-open-page="mybox"]').forEach(btn => {
        btn.addEventListener('click', async function() {
            await loadMyBox();
            renderBoxOperators();
            updateMyBoxSummary();
            loadOtherBoxes();
        });
    });
    document.querySelectorAll('[data-open-page="boxhelp"]').forEach(btn => {
        btn.addEventListener('click', function() {
            loadBoxRequests();
        });
    });

    // ========== 全局返回导航 ==========
    const globalBackNav = document.getElementById('globalBackNav');
    const globalBackBtn = document.getElementById('globalBackBtn');
    let pageHistory = [];

    function recordCurrentPage() {
        const currentPage = document.querySelector('.page-section:not([hidden])');
        if (currentPage) {
            pageHistory.push(currentPage.id);
        } else if (document.body.classList.contains('squad-open')) {
            pageHistory.push('squad');
        } else if (document.body.classList.contains('atlas-open')) {
            pageHistory.push('atlas');
        }
        if (pageHistory.length > 10) pageHistory = pageHistory.slice(-10);
    }

    function updateGlobalBackNav() {
        const isSubPage = document.body.classList.contains('page-open')
            || document.body.classList.contains('squad-open')
            || document.body.classList.contains('atlas-open');
        if (globalBackNav) {
            globalBackNav.classList.toggle('show', isSubPage);
        }
        if (globalBackBtn) {
            if (pageHistory.length > 0) {
                const prev = pageHistory[pageHistory.length - 1];
                const nameMap = { framework: '配队框架', operators: '干员推荐', teams: '实用阵容', community: '配队广场', mybox: '我的Box', boxhelp: 'Box求助', squad: '编队模拟', atlas: '全干员图鉴' };
                const label = nameMap[prev] || '返回';
                globalBackBtn.innerHTML = '&#8592; 返回' + (label !== '返回' ? label : '');
            } else {
                globalBackBtn.innerHTML = '&#8592; 返回首页';
            }
        }
    }

    // 在所有 [data-open-page] 点击前记录历史（捕获阶段，确保先于冒泡阶段的原有处理）
    document.querySelectorAll('[data-open-page]').forEach(btn => {
        btn.addEventListener('click', function() {
            recordCurrentPage();
        }, true); // 捕获阶段
    });

    // 在 data-open-atlas 点击前记录历史（捕获阶段）
    document.querySelectorAll('[data-open-atlas]').forEach(btn => {
        btn.addEventListener('click', function() {
            recordCurrentPage();
        }, true);
    });

    // squad 入口也由 [data-open-page] 覆盖，无需额外处理

    // 监听 body class 变化
    const bodyObserver = new MutationObserver(updateGlobalBackNav);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    globalBackBtn?.addEventListener('click', function() {
        if (pageHistory.length > 0) {
            const prev = pageHistory.pop();
            // 关闭当前页面
            document.body.classList.remove('page-open', 'squad-open', 'atlas-open');
            document.querySelectorAll('.page-section').forEach(s => s.setAttribute('hidden', ''));
            const squadPage = document.getElementById('squad');
            const atlasPage = document.getElementById('atlas');
            if (squadPage) squadPage.setAttribute('hidden', '');
            if (atlasPage) atlasPage.setAttribute('hidden', '');
            // 恢复入口卡片
            ['squad-entry', 'atlas-entry', 'mybox-entry', 'boxhelp-entry', 'community-entry'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = '';
            });
            // 如果上一层是squad或atlas，重新打开
            if (prev === 'squad') {
                const sp = document.getElementById('squad');
                if (sp) { sp.removeAttribute('hidden'); document.body.classList.add('squad-open'); }
                const se = document.getElementById('squad-entry');
                if (se) se.style.display = 'none';
            } else if (prev === 'atlas') {
                const ap = document.getElementById('atlas');
                if (ap) { ap.removeAttribute('hidden'); document.body.classList.add('atlas-open'); }
                const ae = document.getElementById('atlas-entry');
                if (ae) ae.style.display = 'none';
            } else {
                const page = document.getElementById(prev);
                if (page) {
                    page.removeAttribute('hidden');
                    document.body.classList.add('page-open');
                }
            }
            updateGlobalBackNav();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // 没有历史，返回首页
            document.body.classList.remove('page-open', 'squad-open', 'atlas-open');
            document.querySelectorAll('.page-section').forEach(s => s.setAttribute('hidden', ''));
            const squadPage = document.getElementById('squad');
            const atlasPage = document.getElementById('atlas');
            if (squadPage) squadPage.setAttribute('hidden', '');
            if (atlasPage) atlasPage.setAttribute('hidden', '');
            ['squad-entry', 'atlas-entry', 'mybox-entry', 'boxhelp-entry', 'community-entry'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = '';
            });
            updateGlobalBackNav();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // 恢复博士名称
    const savedName = localStorage.getItem('arknights_player_name');
    if (savedName) {
        const nameInput = document.getElementById('playerNameInput');
        if (nameInput) nameInput.value = savedName;
    }

    updateAdminUI();
});
