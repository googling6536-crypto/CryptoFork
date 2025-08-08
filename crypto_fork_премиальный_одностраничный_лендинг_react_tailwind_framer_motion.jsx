import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Sparkles,
  Shield,
  Layers,
  LineChart,
  Cog,
  Users,
  Clock,
  Check,
} from "lucide-react";

// Однофайловый премиальный лендинг CryptoFork
// Стек: React + Tailwind + Framer Motion
// Язык интерфейса: русский
// Стратегия: престиж-first, без цен, без соцдоказательств, без лид-форм
// Основатель: Ибрагимов Арсен

// Подсказка по Tailwind: убедитесь, что tailwind.css подключен в проекте.
// Компонент экспортируется по умолчанию и готов к встраиванию.

// Базовые пресеты анимаций
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeInDelayed = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] } },
};

const glass =
  "backdrop-blur-xl/50 bg-white/5 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]";

// Универсальная кнопка с легким свечением
function GlowButton({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide text-white transition duration-500 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset, 0 10px 30px rgba(0, 209, 255, 0.15)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%), radial-gradient(120% 120% at 0% 0%, rgba(106,0,255,0.35) 0%, rgba(0,209,255,0.35) 40%, rgba(0,0,0,0) 70%)",
      }}
    >
      <span className="translate-y-[0.5px]">{children}</span>
      <ChevronRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
    </Comp>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#6A00FF] via-[#7A42FF] to-[#00D1FF] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-6 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}

function GlassCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`${glass} rounded-3xl p-6 sm:p-8 ${className}`}>{children}</div>
  );
}

const modules = [
  {
    icon: Layers,
    title: "Блокчейн и сети",
    text: "Архитектура L1-L2, консенсус, газ, финализация, безопасность протокола.",
  },
  { icon: Shield, title: "Безопасность", text: "Кошельки, операционная гигиена, опознание рисков и фишингов." },
  { icon: Cog, title: "Инфраструктура", text: "Биржи, ликвидность, комиссии, исполнение сделок и маршрутизация." },
  { icon: LineChart, title: "Аллокации", text: "Портфели, горизонты, ребалансировка, сценарные стратегии." },
  { icon: Sparkles, title: "DeFi-практика", text: "Пулы, стейкинг, деривативы, доходность и сопутствующие риски." },
  { icon: Users, title: "Ончейн-аналитика", text: "Адресные когорты, потоки, поведение, метрики принятия решений." },
  { icon: Layers, title: "Токеномика", text: "Эмиссия, стимулы, модели ценности и устойчивости." },
  { icon: Clock, title: "Психология и выход", text: "Дисциплина, сценарии фиксации, структура действий." },
];

const faqs = [
  {
    q: "Нужен ли опыт до старта?",
    a: "Нет. Программа ведет от азов к уверенной практике. Сложное - ясно, без перегруза теорией.",
  },
  {
    q: "Сколько времени закладывать?",
    a: "116 коротких уроков по 10-15 минут, плюс время на отработку. Рекомендуемый ритм - от 3 до 5 часов в неделю.",
  },
  {
    q: "Как работает формат потоков?",
    a: "Обучение идет партиями. Профессиональная команда задает темп, сопровождает прохождение и помогает удерживать дисциплину.",
  },
  {
    q: "На каких устройствах удобно учиться?",
    a: "Личный кабинет адаптирован под мобильные, планшеты и десктопы.",
  },
  {
    q: "Будут ли обновления?",
    a: "Да. Контент эволюционирует. Программа развивается вместе с рынком и регулярно уточняется.",
  },
];

export default function CryptoForkLanding() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0B0F14] text-white antialiased">
      {/* Фоновая иридисцентная сцена */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {/* Градиентные орбы с легким параллаксом */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-10%] top-[-10%] h-[60vmax] w-[60vmax] rounded-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(106,0,255,0.25) 0%, rgba(0,0,0,0) 60%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[-20%] top-[10%] h-[70vmax] w-[70vmax] rounded-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0,209,255,0.22) 0%, rgba(0,0,0,0) 60%)",
            filter: "blur(50px)",
          }}
        />
        {/* Стеклянная дымка */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.06),rgba(11,15,20,0.0))]" />
      </div>

      {/* Навбар */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md/60">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl" style={{ background: "linear-gradient(135deg,#6A00FF,#00D1FF)" }} />
            <span className="text-sm font-semibold tracking-wider text-white/90">CryptoFork</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-white/70 sm:flex">
            <a href="#manifest" className="transition hover:text-white">Манифест</a>
            <a href="#about" className="transition hover:text-white">О курсе</a>
            <a href="#program" className="transition hover:text-white">Программа</a>
            <a href="#method" className="transition hover:text-white">Метод</a>
            <a href="#pricing" className="transition hover:text-white">Тарифы</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Section className="pt-14 sm:pt-20">
        <div className="relative -mx-6 mb-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent sm:-mx-8" />
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16" style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        }}>
          <motion.div variants={fadeIn} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6A00FF] to-[#00D1FF]" />
              Элитная образовательная платформа по криптовалютам
            </div>
            <h1 className="mb-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              <GradientText>CryptoFork</GradientText>. Элитное образование по криптовалютам.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              116 выверенных уроков по 10-15 минут. Сложное - ясно. Рынок - структурно. Действия - дисциплинированы.
            </p>
            <p className="mx-auto mb-10 max-w-2xl text-sm text-white/60">
              Основатель - Ибрагимов Арсен
            </p>
            <div className="flex items-center justify-center gap-3">
              <GlowButton href="#program">Смотреть программу</GlowButton>
              <a href="#manifest" className="text-sm text-white/70 transition hover:text-white">Манифест</a>
            </div>
          </motion.div>

          {/* Декоративная стеклянная сфера */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 hidden aspect-square w-64 rounded-full sm:block"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.0) 60%)",
              boxShadow: "inset 0 1px 30px rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          />
        </div>
      </Section>

      {/* Манифест */}
      <Section id="manifest" className="pb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <GlassCard>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
                  <GradientText>Манифест</GradientText>
                </h2>
                <p className="text-white/70">
                  Убираем шум и оставляем метод. Глубина без перегруза. Практика вместо пустых обещаний. Безопасность и риск-менеджмент - рамка любого действия. Никаких обещаний доходности - только инструменты и дисциплина.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Глубина", text: "Система знаний от азов до ончейн-метрик." },
                  { title: "Ясность", text: "Сложное - просто, без примитивизации." },
                  { title: "Практика", text: "Сценарии, чек-листы, операционные протоколы." },
                  { title: "Дисциплина", text: "Ритм прохождения и контроль прогресса в потоке." },
                ].map((item, i) => (
                  <div key={i} className={`${glass} rounded-2xl p-5`}>
                    <p className="mb-1 text-sm tracking-wide text-white/60">{item.title}</p>
                    <p className="text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Section>

      {/* О курсе */}
      <Section id="about" className="pb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                <GradientText>О курсе</GradientText>
              </h3>
              <p className="text-white/70">
                116 коротких, плотных уроков по 10-15 минут складываются в единую систему: архитектура сетей, безопасность, инфраструктура, аллокации, DeFi-практика, ончейн-аналитика, токеномика, психология и сценарии выхода.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                <GradientText>Формат</GradientText>
              </h3>
              <p className="text-white/70">
                Обучение идет потоками. Профессиональная команда задает темп и сопровождает прохождение. Личный кабинет адаптирован под мобильные устройства.
              </p>
            </GlassCard>
          </div>
        </motion.div>
      </Section>

      {/* Программа */}
      <Section id="program" className="pb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              <GradientText>Программа</GradientText>
            </h2>
            <GlowButton href="#">Перейти к полной программе</GlowButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, idx) => (
              <motion.div key={idx} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className={`${glass} rounded-2xl p-6`}>
                <div className="mb-3 flex items-center gap-3">
                  <m.icon className="h-5 w-5 text-white/80" />
                  <p className="text-sm font-semibold tracking-wide text-white/80">{m.title}</p>
                </div>
                <p className="text-white/70">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Создатель */}
      <Section className="pb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className={`${glass} grid items-center gap-8 rounded-3xl p-8 sm:grid-cols-2 sm:p-12`}>
            <div>
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
                <GradientText>Создатель</GradientText>
              </h2>
              <h3 className="mb-2 text-lg font-semibold">Ибрагимов Арсен - основатель CryptoFork</h3>
              <p className="text-white/70">
                Коротко о главном: требовательность к качеству, приоритет дисциплины над хайпом, метод вместо шума. Фокус на долгоживущих принципах и операционных деталях. Цель - ясность действий и устойчивость решений.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl" style={{
                background:
                  "linear-gradient(135deg, rgba(106,0,255,0.16), rgba(0,209,255,0.16))",
              }}>
                {/* Декоративный стеклянный объект вместо фото */}
                <div className="relative h-full w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-8 rounded-3xl"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.0) 70%)",
                      boxShadow: "inset 0 1px 30px rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Методика потока */}
      <Section id="method" className="pb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Единый ритм", text: "Партии запускаются по расписанию. Ритм прохождения общий, без хаотичности." },
              { title: "Роль команды", text: "Профессиональные кураторы помогают удерживать дисциплину и ясность действий." },
              { title: "Адаптивный доступ", text: "Личный кабинет удобен на мобильных, планшетах и десктопах." },
            ].map((item, i) => (
              <div key={i} className={`${glass} rounded-2xl p-6`}>
                <p className="mb-1 text-sm tracking-wide text-white/60">{item.title}</p>
                <p className="text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Тарифы */}
      <Section id="pricing" className="pb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              <GradientText>Тарифы</GradientText>
            </h2>
            <GlowButton href="#">Открыть полную программу</GlowButton>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Core */}
            <div className={`${glass} relative rounded-3xl p-8`}>
              <p className="mb-2 text-sm tracking-wide text-white/60">Core</p>
              <h3 className="mb-2 text-xl font-semibold">Базовый уровень</h3>
              <div className="mb-5 text-3xl font-semibold">49 000 ₽</div>
              <ul className="mb-6 space-y-3 text-white/75">
                {[
                  'Полный доступ к 116 урокам',
                  'Структурированные чек-листы',
                  'Личный кабинет, мобильный доступ',
                  'Обновления контента',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-white/70" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <GlowButton href="#">Подробнее</GlowButton>
            </div>

            {/* Pro */}
            <div className={`${glass} relative rounded-3xl p-8`}>
              <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] tracking-wide text-white/80">Рекомендуем</div>
              <p className="mb-2 text-sm tracking-wide text-white/60">Pro</p>
              <h3 className="mb-2 text-xl font-semibold">Усиленный уровень</h3>
              <div className="mb-5 text-3xl font-semibold">89 000 ₽</div>
              <ul className="mb-6 space-y-3 text-white/75">
                {[
                  'Все из Core',
                  'Потоковый темп и контроль прохождения',
                  'Практические сценарии и протоколы выполнения',
                  'Приоритетные обновления программы',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-white/70" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <GlowButton href="#">Подробнее</GlowButton>
            </div>

            {/* Elite */}
            <div className={`${glass} relative rounded-3xl p-8`}>
              <p className="mb-2 text-sm tracking-wide text-white/60">Elite</p>
              <h3 className="mb-2 text-xl font-semibold">Для максималистов</h3>
              <div className="mb-5 text-3xl font-semibold">149 000 ₽</div>
              <ul className="mb-6 space-y-3 text-white/75">
                {[
                  'Все из Pro',
                  'Закрытые интенсивы по методике',
                  'Глубинные сценарии аллокаций',
                  'Расширенные шаблоны и чек-листы',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-white/70" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <GlowButton href="#">Подробнее</GlowButton>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="pb-12">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            <GradientText>FAQ</GradientText>
          </h2>
          <div className="divide-y divide-white/10 rounded-3xl border border-white/10">
            {faqs.map((f, i) => (
              <details key={i} className="group px-6 py-5 open:bg-white/3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-left text-white/80 transition hover:text-white">
                  <span className="text-base sm:text-lg">{f.q}</span>
                  <ChevronRight className="h-5 w-5 text-white/50 transition duration-300 group-open:rotate-90" />
                </summary>
                <p className="mt-2 max-w-3xl text-sm text-white/70 sm:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Финальный экран */}
      <Section className="pb-24">
        <motion.div variants={fadeInDelayed} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="relative overflow-hidden rounded-3xl p-10 text-center sm:p-14" style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
          }}>
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
              <GradientText>Выбирайте дисциплину и глубину. Остальное - следствие.</GradientText>
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-white/70">
              CryptoFork - платформа для тех, кто предпочитает план гипотезам и метод шуму.
            </p>
            <GlowButton href="#program">Смотреть программу</GlowButton>
          </div>
        </motion.div>
      </Section>

      {/* Футер без юридических дисклеймеров и домена */}
      <footer className="relative border-t border-white/10 py-10 text-center text-xs text-white/50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <p>© {new Date().getFullYear()} CryptoFork. Все права защищены.</p>
          <p className="mt-2">Элитное образование по криптовалютам. Основатель - Ибрагимов Арсен.</p>
        </div>
      </footer>
    </div>
  );
}
