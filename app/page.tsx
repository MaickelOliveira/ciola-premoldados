"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  Box,
  Building2,
  Camera,
  CheckCircle2,
  Factory,
  Home,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  X,
} from "lucide-react"
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const whatsappNumber = "5544998024618"
const whatsappLink = `https://wa.me/${whatsappNumber}`

const heroStages = [
  {
    step: "Etapa 01 · Fundações",
    title: "Todo grande barracão começa na base certa.",
    text: "Fundações e apoios preparados para receber cada elemento pré-moldado com precisão.",
  },
  {
    step: "Etapa 02 · Montagem dos pilares",
    title: "Pilares pré-moldados. A obra começa a ganhar escala.",
    text: "Os elementos produzidos em fábrica são içados e posicionados no canteiro conforme o projeto.",
  },
  {
    step: "Etapa 03 · Vigas e estrutura",
    title: "Precisão que transforma peças em uma estrutura sólida.",
    text: "Pilares, vigas e travamentos se conectam para formar o esqueleto resistente do barracão.",
  },
  {
    step: "Etapa 04 · Cobertura e fechamento",
    title: "O barracão toma forma. A operação fica mais perto.",
    text: "Cobertura metálica e painéis de fechamento avançam sobre uma estrutura já montada.",
  },
  {
    step: "Etapa 05 · Obra concluída",
    title: "Estrutura pronta para sustentar o seu próximo passo.",
    text: "Um barracão funcional, resistente e preparado para a necessidade do seu negócio.",
  },
]

const heroStageImages = [
  "/images/hero-stages/01-fundacoes.webp",
  "/images/hero-stages/02-pilares.webp",
  "/images/hero-stages/03-estrutura.webp",
  "/images/hero-stages/04-cobertura.webp",
  "/images/hero-stages/05-concluido.webp",
]

const solutions = [
  {
    icon: Building2,
    number: "01",
    title: "Barracões e estruturas",
    text: "Estruturas pré-moldadas e coberturas metálicas dimensionadas conforme uso, vãos e características da obra.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Lajes",
    text: "Lajes protendidas e treliçadas definidas após análise das medidas, dos vãos e da aplicação.",
  },
  {
    icon: Home,
    number: "03",
    title: "Casas pré-moldadas",
    text: "Fornecimento da estrutura pré-moldada, sem acabamento. O escopo exato é detalhado no orçamento.",
  },
  {
    icon: Box,
    number: "04",
    title: "Artefatos de concreto",
    text: "Palanques, escoras, esticadores, cochos, muros e soluções para diferentes aplicações.",
  },
]

const projects = [
  {
    image: "/images/obras/obra-interior-finalizada.jpg",
    title: "Barracão finalizado",
    detail: "Estrutura, fechamento e cobertura",
    featured: true,
  },
  {
    image: "/images/obras/obra-estrutura-externa.jpg",
    title: "Estrutura externa",
    detail: "Execução pré-moldada",
  },
  {
    image: "/images/obras/obra-montagem-estrutura.jpg",
    title: "Montagem estrutural",
    detail: "Pilares, painéis e vigas",
  },
  {
    image: "/images/obras/obra-laje-concretagem.jpg",
    title: "Laje em execução",
    detail: "Processo acompanhado em obra",
  },
  {
    image: "/images/obras/obra-cobertura-concluida.jpg",
    title: "Cobertura concluída",
    detail: "Estrutura pronta para uso",
  },
  {
    image: "/images/obras/obra-instalacao-vigotas.jpg",
    title: "Instalação de vigotas",
    detail: "Precisão em cada etapa",
  },
]

const process = [
  {
    icon: MessageCircle,
    number: "01",
    label: "Briefing da obra",
    title: "Conte o que precisa",
    text: "Envie o tipo de solução, a cidade, medidas aproximadas e, se houver, projeto ou fotos.",
  },
  {
    icon: Ruler,
    number: "02",
    label: "Leitura técnica",
    title: "Análise e orçamento",
    text: "A equipe avalia os aspectos técnicos antes de preparar uma proposta personalizada.",
  },
  {
    icon: Factory,
    number: "03",
    label: "Fabricação Ciola",
    title: "Produção",
    text: "Após a aprovação, os componentes são fabricados conforme o escopo definido.",
  },
  {
    icon: Building2,
    number: "04",
    label: "Canteiro organizado",
    title: "Entrega e montagem",
    text: "Transporte e montagem seguem o produto, o local e as condições aprovadas no orçamento.",
  },
]

const historyStages = [
  {
    step: "01 · A base",
    title: "Uma história construída com concreto e confiança.",
    text: "A Ciola cresceu em Campo Mourão atendendo necessidades reais da construção com produção própria e proximidade.",
  },
  {
    step: "02 · Conhecimento",
    title: "Décadas aprendendo o que cada obra exige.",
    text: "Vãos, cargas, medidas e uso mudam de projeto para projeto. A experiência virou precisão antes de fabricar.",
  },
  {
    step: "03 · Evolução",
    title: "Da peça pré-moldada à estrutura completa.",
    text: "Lajes, artefatos, casas, barracões e coberturas ampliaram a capacidade de transformar projeto em obra montada.",
  },
  {
    step: "04 · Hoje",
    title: "45 anos sustentando o próximo passo.",
    text: "Uma marca paranaense que une experiência, fabricação própria e soluções dimensionadas para cada necessidade.",
  },
]

const comparisonStages = [
  {
    step: "01 · Ritmo de obra",
    title: "Quando as frentes avançam juntas, a obra ganha ritmo.",
    traditional: {
      label: "Obra tradicional",
      metric: "Etapas mais sequenciais",
      text: "Boa parte da execução depende da conclusão da etapa anterior dentro do próprio canteiro.",
    },
    precast: {
      label: "Sistema pré-moldado",
      metric: "Fábrica e canteiro em paralelo",
      text: "Enquanto o terreno é preparado, pilares e vigas podem ser produzidos conforme o projeto.",
    },
    icon: Factory,
  },
  {
    step: "02 · Montagem",
    title: "Peças prontas transformam execução em montagem coordenada.",
    traditional: {
      label: "Obra tradicional",
      metric: "Construção elemento a elemento",
      text: "Formas, armações, concretagem e cura concentram mais atividades diretamente na obra.",
    },
    precast: {
      label: "Sistema pré-moldado",
      metric: "Elementos prontos para montar",
      text: "Pilares, vigas e painéis chegam preparados para içamento e posicionamento no canteiro.",
    },
    icon: Building2,
  },
  {
    step: "03 · Padronização",
    title: "Repetição e controle favorecem um resultado previsível.",
    traditional: {
      label: "Obra tradicional",
      metric: "Mais variáveis no local",
      text: "Clima, formas e diferentes frentes de serviço influenciam a rotina de execução.",
    },
    precast: {
      label: "Sistema pré-moldado",
      metric: "Produção em ambiente controlado",
      text: "As peças seguem medidas e especificações definidas antes de chegar à montagem.",
    },
    icon: Ruler,
  },
  {
    step: "04 · Canteiro",
    title: "Menos etapas molhadas deixam a operação mais organizada.",
    traditional: {
      label: "Obra tradicional",
      metric: "Mais insumos e frentes abertas",
      text: "O canteiro concentra materiais, formas, escoramentos e serviços por mais etapas.",
    },
    precast: {
      label: "Sistema pré-moldado",
      metric: "Fluxo de montagem mais limpo",
      text: "A chegada programada dos elementos reduz processos de fabricação dentro do terreno.",
    },
    icon: Layers,
  },
  {
    step: "05 · Eficiência de custos",
    title: "Economizar é desperdiçar menos tempo, material e energia de obra.",
    traditional: {
      label: "Obra tradicional",
      metric: "Custos distribuídos em mais etapas",
      text: "Mais processos no canteiro podem ampliar perdas de material, horas de equipe e custos indiretos.",
    },
    precast: {
      label: "Sistema pré-moldado",
      metric: "Potencial de economia na obra",
      text: "Menos desperdício e uma montagem mais rápida podem reduzir custos totais, conforme as condições do projeto.",
    },
    icon: CheckCircle2,
  },
  {
    step: "06 · Escala",
    title: "Para grandes vãos, repetição e velocidade, o pré-moldado se destaca.",
    traditional: {
      label: "Obra tradicional",
      metric: "Flexibilidade artesanal",
      text: "Continua adequada para muitos projetos, especialmente onde há geometrias e intervenções pontuais.",
    },
    precast: {
      label: "Sistema pré-moldado",
      metric: "Estrutura pensada para crescer",
      text: "Uma solução especialmente eficiente para barracões, galpões, áreas industriais, comerciais e rurais.",
    },
    icon: Building2,
  },
]

const faqs = [
  {
    question: "O que é necessário para solicitar um orçamento?",
    answer:
      "Informe a cidade da obra, o tipo de solução, as medidas aproximadas e a finalidade. Se já tiver planta, projeto ou fotos, envie também.",
  },
  {
    question: "A casa pré-moldada já inclui acabamento?",
    answer:
      "Não. A Ciola fornece a estrutura pré-moldada. Acabamentos e demais serviços ficam por conta do cliente, conforme o escopo detalhado no orçamento.",
  },
  {
    question: "Qual laje é indicada: protendida ou treliçada?",
    answer:
      "A alternativa adequada depende dos vãos, cargas, medidas e aplicação. A equipe analisa a obra antes de indicar a solução.",
  },
  {
    question: "Entrega e montagem fazem parte do orçamento?",
    answer:
      "A composição varia conforme o produto, a cidade e o local da obra. O que está incluído aparece claramente na proposta aprovada.",
  },
  {
    question: "A Ciola atende fora de Campo Mourão?",
    answer:
      "A viabilidade é analisada conforme a cidade e o escopo. Envie a localização da obra para a equipe verificar as condições.",
  },
]

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionSweep({
  tone,
  direction = "right",
}: {
  tone: "light" | "navy" | "blue" | "white"
  direction?: "left" | "right"
}) {
  return (
    <motion.div
      className={`section-sweep section-sweep-${tone}`}
      aria-hidden="true"
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={{ once: true, amount: 0.04 }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: direction === "right" ? "right center" : "left center" }}
    />
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [service, setService] = useState("Barracões, estruturas e coberturas")
  const [sent, setSent] = useState(false)
  const [heroStage, setHeroStage] = useState(0)
  const [comparisonStage, setComparisonStage] = useState(0)
  const [historyStage, setHistoryStage] = useState(0)
  const [historyYears, setHistoryYears] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const comparisonRef = useRef<HTMLElement>(null)
  const historyRef = useRef<HTMLElement>(null)
  const heroFrameRefs = useRef<Array<HTMLImageElement | null>>([])
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  })
  const { scrollYProgress: historyScroll } = useScroll({
    target: historyRef,
    offset: ["start start", "end end"],
  })
  const historyProgress = useSpring(historyScroll, {
    stiffness: 92,
    damping: 26,
    mass: 0.32,
  })
  const historyLogoScale = useTransform(historyProgress, [0, 0.18, 0.7, 1], [0.64, 1.08, 0.94, 1.16])
  const historyLogoRotate = useTransform(historyProgress, [0, 0.25, 1], [-7, 0, 0])
  const historyGlow = useTransform(historyProgress, [0, 0.25, 0.72, 1], [0.18, 0.8, 0.5, 1])
  const historyNumberScale = useTransform(historyProgress, [0, 1], [0.72, 1.08])

  const { scrollYProgress: comparisonScroll } = useScroll({
    target: comparisonRef,
    offset: ["start start", "end end"],
  })
  const comparisonProgress = useSpring(comparisonScroll, {
    stiffness: 92,
    damping: 27,
    mass: 0.3,
  })
  const comparisonClip = useTransform(
    comparisonProgress,
    [0, 0.12, 1],
    ["inset(0 0 0 50%)", "inset(0 0 0 50%)", "inset(0 0 0 17%)"],
  )
  const comparisonDivider = useTransform(
    comparisonProgress,
    [0, 0.12, 1],
    ["50%", "50%", "17%"],
  )
  const traditionalOpacity = useTransform(comparisonProgress, [0, 0.62, 1], [1, 0.78, 0.5])
  const precastScale = useTransform(comparisonProgress, [0, 1], [0.96, 1.035])
  const comparisonBuild = useTransform(comparisonScroll, [0, 5 / 6, 1], [0, 1, 1])

  useMotionValueEvent(comparisonScroll, "change", (value) => {
    const nextStage = Math.min(
      comparisonStages.length - 1,
      Math.floor(value * comparisonStages.length),
    )
    setComparisonStage((current) => current === nextStage ? current : nextStage)
  })

  useMotionValueEvent(historyProgress, "change", (value) => {
    const nextStage = Math.min(historyStages.length - 1, Math.floor(value * historyStages.length))
    const nextYears = Math.round(value * 45)
    setHistoryStage((current) => current === nextStage ? current : nextStage)
    setHistoryYears((current) => current === nextYears ? current : nextYears)
  })

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    let frame = 0
    let queued = false

    const renderHero = () => {
      queued = false
      const rect = hero.getBoundingClientRect()
      const scrollDistance = Math.max(hero.offsetHeight - window.innerHeight, 1)
      const progressValue = Math.min(Math.max(-rect.top / scrollDistance, 0), 1)
      const stagePosition = progressValue * (heroStageImages.length - 1)

      heroFrameRefs.current.forEach((image, index) => {
        if (!image) return
        const opacity = Math.max(0, 1 - Math.abs(stagePosition - index))
        image.style.opacity = opacity.toFixed(3)
        image.style.transform = `scale(${(1.015 + progressValue * 0.022).toFixed(4)})`
      })

      const nextStage = Math.round(stagePosition)
      setHeroStage((current) => current === nextStage ? current : nextStage)
      const shouldShowHeader = progressValue >= 0.985
      setHeaderVisible((current) => current === shouldShowHeader ? current : shouldShowHeader)
    }

    const requestRender = () => {
      if (queued) return
      queued = true
      frame = requestAnimationFrame(renderHero)
    }

    window.addEventListener("scroll", requestRender, { passive: true })
    window.addEventListener("resize", requestRender)
    requestRender()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestRender)
      window.removeEventListener("resize", requestRender)
    }
  }, [])

  useEffect(() => {
    if (!headerVisible) setMenuOpen(false)
  }, [headerVisible])

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      "Olá, equipe Ciola! Gostaria de solicitar uma análise e orçamento.",
      "",
      `Nome: ${form.get("nome")}`,
      `WhatsApp: ${form.get("whatsapp")}`,
      `Cidade/UF da obra: ${form.get("cidade")}`,
      `Solução: ${service}`,
      `Medidas e detalhes: ${form.get("detalhes")}`,
    ].join("\n")

    window.open(
      `${whatsappLink}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
    setSent(true)
  }

  const ActiveComparisonIcon = comparisonStages[comparisonStage].icon

  return (
    <MotionConfig reducedMotion="user">
      <main className="site-shell">
        <motion.div className="scroll-progress" style={{ scaleX: progress }} />

        <AnimatePresence>
          {headerVisible && (
        <motion.header
          className="site-header"
          initial={{ opacity: 0, y: -96 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -96 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="brand-link" href="#inicio" aria-label="Ciola Pré-Moldados — início">
            <img src="/brand/ciola-logo.png" alt="Ciola Pré-Moldados" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#lajes">Lajes</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#historia">45 anos</a>
            <a href="#obras">Obras</a>
            <a href="#processo">Como funciona</a>
          </nav>

          <a className="header-cta" href="#orcamento">
            Solicitar orçamento
            <ArrowRight aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              aria-label="Navegação mobile"
            >
              {[
                ["Início", "#inicio"],
                ["Soluções", "#solucoes"],
                ["Lajes", "#lajes"],
                ["Benefícios", "#beneficios"],
                ["45 anos", "#historia"],
                ["Obras", "#obras"],
                ["Como funciona", "#processo"],
                ["Localização", "#localizacao"],
                ["Solicitar orçamento", "#orcamento"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                  <ArrowRight aria-hidden="true" />
                </a>
              ))}
            </motion.nav>
          )}
        </motion.header>
          )}
        </AnimatePresence>

        <section className="hero-scroll-shell" id="inicio" ref={heroRef}>
          <div className="hero-sticky">
            <div className="hero-frames" aria-label="Construção de um barracão pré-moldado controlada pela rolagem">
              {heroStageImages.map((image, index) => (
                <img
                  key={image}
                  ref={(element) => { heroFrameRefs.current[index] = element }}
                  className="hero-stage-image"
                  src={image}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  style={{ opacity: index === 0 ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="hero-shade" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />

            <div className="hero-content section-wrap">
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
                <span className="pulse-dot" />
                Ciola · Barracões pré-moldados · 45 anos de experiência
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  className="hero-story"
                  key={heroStage}
                  initial={{ opacity: 0, y: 28, filter: "blur(7px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                  transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="hero-stage-label">{heroStages[heroStage].step}</p>
                  <h1>{heroStages[heroStage].title}</h1>
                  <p className="hero-copy">{heroStages[heroStage].text}</p>
                </motion.div>
              </AnimatePresence>

              <div className="hero-actions">
                <a className="button button-primary" href="#orcamento">
                  Solicitar análise e orçamento
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="button button-ghost" href="#obras">
                  Ver obras realizadas
                </a>
              </div>

              <div className="hero-markets">
                <span>Residencial</span><i />
                <span>Comercial</span><i />
                <span>Industrial</span><i />
                <span>Rural</span>
              </div>
            </div>

            <div className="hero-stage-nav" aria-hidden="true">
              {heroStages.map((stage, index) => (
                <span key={stage.step} className={index === heroStage ? "active" : ""}>
                  <i />
                  0{index + 1}
                </span>
              ))}
            </div>

            <div className="scroll-cue">
              <span>Role para construir</span>
              <ArrowDown aria-hidden="true" />
            </div>
            <div className="hero-index" aria-hidden="true">
              <span>01</span>
              <div />
              <small>Construção inteligente</small>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Diferenciais Ciola">
          <div className="section-wrap proof-grid">
            <div><strong>45<span></span></strong><p>Anos de experiência</p></div>
            <div><Factory aria-hidden="true" /><p><strong>Fabricação própria</strong><br />em Campo Mourão</p></div>
            <div><Ruler aria-hidden="true" /><p><strong>Análise sob medida</strong><br />para cada projeto</p></div>
            <div><CheckCircle2 aria-hidden="true" /><p><strong>Do orçamento</strong><br />à obra montada</p></div>
          </div>
        </section>

        <section className="section section-light" id="solucoes">
          <SectionSweep tone="light" />
          <div className="section-wrap">
            <Reveal className="section-heading heading-split">
              <div>
                <p className="eyebrow eyebrow-blue">Soluções Ciola</p>
                <h2>Uma estrutura precisa começar com a solução <span className="accent-red">certa.</span></h2>
              </div>
              <p>
                Cada obra tem medidas, finalidade e condições próprias. A Ciola
                analisa essas variáveis para orientar o produto e o escopo adequados.
              </p>
            </Reveal>

            <div className="solutions-grid">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <Reveal key={solution.number} delay={index * 0.08}>
                    <article className="solution-card">
                      <div className="solution-top">
                        <span>{solution.number}</span>
                        <div className="solution-icon">
                          <Icon aria-hidden="true" />
                        </div>
                      </div>
                      <h3>{solution.title}</h3>
                      <p>{solution.text}</p>
                      <a href="#orcamento">
                        Falar sobre este projeto
                        <ArrowRight aria-hidden="true" />
                      </a>
                    </article>
                  </Reveal>
                )
              })}
            </div>

            <Reveal className="sector-feature">
              <img
                src="/images/ai/agronegocio-ciola-v2.webp"
                alt="Barracão agroindustrial em estrutura pré-moldada"
                loading="lazy"
              />
              <div className="sector-overlay" />
              <div className="sector-content">
                <p className="eyebrow">Estruturas para crescer</p>
                <h3>Do campo à indústria, espaço para o próximo passo.</h3>
                <p>
                  Barracões e galpões pensados para a operação, o fluxo e as
                  características do seu negócio.
                </p>
                <a className="button button-white" href="#orcamento">
                  Conte seu projeto
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-slabs" id="lajes">
          <SectionSweep tone="white" direction="left" />
          <div className="section-wrap">
            <Reveal className="section-heading slabs-heading">
              <div>
                <p className="eyebrow eyebrow-blue">Lajes Ciola</p>
                <h2>Dois sistemas. Uma escolha feita pelo <span className="accent-red">projeto.</span></h2>
              </div>
              <p>
                A laje entra quando vigas e apoios já estão prontos. Ela forma o
                piso ou a cobertura e distribui as cargas para a estrutura da obra.
              </p>
            </Reveal>

            <div className="slabs-grid">
              <Reveal>
                <article className="slab-card">
                  <div className="slab-media">
                    <img
                      src="/images/lajes/laje-protendida.webp"
                      alt="Laje protendida em instalação"
                      loading="lazy"
                    />
                  </div>
                  <div className="slab-content">
                    <div className="slab-title-row">
                      <small>01 · Maior capacidade de vão</small>
                      <Layers aria-hidden="true" />
                    </div>
                    <h3>Laje <span className="accent-red">protendida</span></h3>
                    <p>
                      Usa vigotas produzidas com fios de aço previamente tensionados.
                      A solução trabalha com eficiência em vãos e cargas definidos
                      pelo cálculo estrutural.
                    </p>
                    <div className="slab-fit">
                      <Building2 aria-hidden="true" />
                      <span>
                        <small>Onde costuma se encaixar</small>
                        Galpões, mezaninos, edifícios comerciais e situações com vãos maiores.
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.1}>
                <article className="slab-card slab-card-blue">
                  <div className="slab-media">
                    <img
                      src="/images/lajes/laje-trelicada.webp"
                      alt="Laje treliçada em instalação"
                      loading="lazy"
                    />
                  </div>
                  <div className="slab-content">
                    <div className="slab-title-row">
                      <small>02 · Flexibilidade de aplicação</small>
                      <Ruler aria-hidden="true" />
                    </div>
                    <h3>Laje <span className="accent-red">treliçada</span></h3>
                    <p>
                      Combina vigotas de concreto, armação treliçada e elementos de
                      enchimento. Depois recebe armaduras complementares e a capa de concreto.
                    </p>
                    <div className="slab-fit">
                      <Home aria-hidden="true" />
                      <span>
                        <small>Onde costuma se encaixar</small>
                        Residências, sobrados e obras comerciais com vãos pequenos ou médios.
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>

            <Reveal className="slab-sequence">
              <div className="slab-sequence-intro">
                <span>Como a laje entra na construção</span>
                <strong>Da estrutura pronta à concretagem</strong>
              </div>
              <ol>
                {[
                  ["01", "Apoios", "Vigas ou paredes estruturais concluídas"],
                  ["02", "Vigotas", "Peças posicionadas conforme o projeto"],
                  ["03", "Enchimento", "Blocos cerâmicos ou EPS entre as vigotas"],
                  ["04", "Armaduras", "Reforços e instalações conferidos"],
                  ["05", "Capa", "Concretagem e cura final do conjunto"],
                ].map(([number, title, text]) => (
                  <li key={number}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <p className="slab-note">
              A indicação final depende de vãos, cargas, apoios e do projeto estrutural.
              A equipe Ciola analisa cada aplicação antes de definir a solução.
            </p>
          </div>
        </section>

        <section className="comparison-scroll" id="beneficios" ref={comparisonRef}>
          <div className="comparison-sticky">
            <div className="comparison-traditional-bg" aria-hidden="true" />
            <motion.div
              className="comparison-precast-bg"
              style={{ clipPath: comparisonClip }}
              aria-hidden="true"
            />
            <motion.div
              className="comparison-divider"
              style={{ left: comparisonDivider }}
              aria-hidden="true"
            >
              <span>VS</span>
            </motion.div>
            <div className="comparison-grid-bg" aria-hidden="true" />

            <div className="section-wrap comparison-layout">
              <div className="comparison-heading">
                <p className="eyebrow">Construção comparada</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={comparisonStage}
                    initial={{ opacity: 0, y: 24, filter: "blur(7px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(5px)" }}
                    transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span>{comparisonStages[comparisonStage].step}</span>
                    <h2>{comparisonStages[comparisonStage].title}</h2>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="comparison-cards">
                <motion.article
                  className="comparison-card comparison-card-traditional"
                  style={{ opacity: traditionalOpacity }}
                >
                  <div className="traditional-build" aria-hidden="true">
                    <span /><span /><span /><span /><span /><span /><span /><span />
                    <Layers />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      className="comparison-card-copy"
                      key={`traditional-${comparisonStage}`}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 18 }}
                      transition={{ duration: 0.4 }}
                    >
                      <small>Obra tradicional</small>
                      <h3>{comparisonStages[comparisonStage].traditional.metric}</h3>
                      <p>{comparisonStages[comparisonStage].traditional.text}</p>
                    </motion.div>
                  </AnimatePresence>
                </motion.article>

                <motion.article
                  className="comparison-card comparison-card-precast"
                  style={{ scale: precastScale }}
                >
                  <div className="precast-build" aria-hidden="true">
                    <i className="precast-beam precast-beam-one" />
                    <i className="precast-beam precast-beam-two" />
                    <i className="precast-column precast-column-one" />
                    <i className="precast-column precast-column-two" />
                    <i className="precast-column precast-column-three" />
                    <ActiveComparisonIcon />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      className="comparison-card-copy"
                      key={`precast-${comparisonStage}`}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.4 }}
                    >
                      <small>Obra pré-moldada</small>
                      <h3>{comparisonStages[comparisonStage].precast.metric}</h3>
                      <p>{comparisonStages[comparisonStage].precast.text}</p>
                    </motion.div>
                  </AnimatePresence>
                </motion.article>
              </div>

              <div className="comparison-footer">
                <p>
                  A solução ideal depende do projeto. A comparação destaca ganhos
                  recorrentes do pré-moldado em obras com escala, repetição e agilidade.
                </p>
                <div className="comparison-timeline" aria-hidden="true">
                  <motion.div style={{ scaleX: comparisonBuild }} />
                  {comparisonStages.map((stage, index) => (
                    <span key={stage.step} className={index <= comparisonStage ? "active" : ""}>
                      <i />0{index + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="comparison-scroll-cue">
              <ArrowDown aria-hidden="true" />
              Role para comparar
            </div>
          </div>
        </section>

        <section className="section section-dark" id="ciola">
          <SectionSweep tone="navy" direction="left" />
          <div className="section-wrap engineering-grid">
            <Reveal className="engineering-media">
              <img
                src="/images/ai/engenharia-ciola-capacete-centralizado-v5.webp"
                alt="Profissional da Ciola inspecionando elemento pré-moldado"
                loading="lazy"
              />
              <div className="media-frame" aria-hidden="true" />
            </Reveal>

            <Reveal className="engineering-copy" delay={0.1}>
              <p className="eyebrow">Experiência de fábrica</p>
              <h2>Precisão antes da produção. Confiança depois da montagem.</h2>
              <p className="lead">
                Há 45 anos em Campo Mourão, a Ciola transforma necessidades
                de obra em soluções pré-moldadas produzidas para cada aplicação.
              </p>
              <div className="check-list">
                {[
                  "Análise de medidas, finalidade e localização",
                  "Produção conforme o escopo aprovado",
                  "Orientação clara sobre transporte e montagem",
                  "Atendimento para obras residenciais, comerciais, industriais e rurais",
                ].map((item) => (
                  <div key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a className="text-link" href="#processo">
                Entenda como funciona
                <ArrowRight aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="history-scroll" id="historia" ref={historyRef}>
          <div className="history-sticky">
            <motion.div className="history-glow" style={{ opacity: historyGlow }} aria-hidden="true" />
            <div className="history-grid-bg" aria-hidden="true" />

            <div className="section-wrap history-layout">
              <motion.div className="history-years" style={{ scale: historyNumberScale }}>
                <span>{historyYears}</span>
                <small>ANOS</small>
                <p>produzindo estruturas para o que vem pela frente</p>
              </motion.div>

              <motion.div
                className="history-logo"
                style={{ scale: historyLogoScale, rotate: historyLogoRotate }}
              >
                <div className="history-logo-ring" aria-hidden="true" />
                <img src="/brand/ciola-logo.png" alt="Ciola Pré-Moldados" />
                <span>Campo Mourão · Paraná</span>
              </motion.div>

              <div className="history-copy">
                <p className="eyebrow">Uma marca feita para durar</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={historyStage}
                    initial={{ opacity: 0, x: 38, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                    transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span>{historyStages[historyStage].step}</span>
                    <h2>{historyStages[historyStage].title}</h2>
                    <p>{historyStages[historyStage].text}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="section-wrap history-timeline" aria-hidden="true">
              <motion.div className="history-progress" style={{ scaleX: historyProgress }} />
              {historyStages.map((stage, index) => (
                <span key={stage.step} className={index <= historyStage ? "active" : ""}>
                  <i />
                  0{index + 1}
                </span>
              ))}
            </div>

            <div className="history-scroll-cue">
              <ArrowDown aria-hidden="true" />
              Role para percorrer a história
            </div>
          </div>
        </section>

        <section className="section section-concrete" id="obras">
          <SectionSweep tone="white" />
          <div className="section-wrap">
            <Reveal className="section-heading heading-split projects-heading">
              <div>
                <p className="eyebrow eyebrow-blue">Obras realizadas</p>
                <h2>Estruturas <span className="accent-red">reais.</span> Trabalho que fica de pé.</h2>
              </div>
              <div className="real-badge">
                <CheckCircle2 aria-hidden="true" />
                Fotos reais de obras Ciola
              </div>
            </Reveal>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal
                  key={project.image}
                  className={project.featured ? "project-featured" : ""}
                  delay={(index % 3) * 0.07}
                >
                  <article className="project-card">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-shade" />
                    <div className="project-caption">
                      <small>{project.detail}</small>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-number">0{index + 1}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-process" id="processo">
          <SectionSweep tone="blue" direction="left" />
          <div className="section-wrap">
            <Reveal className="section-heading process-heading">
              <p className="eyebrow">Do primeiro contato à obra</p>
              <h2>Fechar com a Ciola é simples.</h2>
              <p>
                Você envia as informações. A equipe analisa o cenário e conduz as
                próximas etapas com clareza.
              </p>
            </Reveal>

            <div className="process-flow">
              <motion.div
                className="process-flow-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
              <div className="process-grid">
                {process.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <Reveal key={step.number} delay={index * 0.09}>
                      <article className="process-card">
                        <div className="process-card-top">
                          <span>{step.number}</span>
                          <div className="process-icon">
                            <Icon aria-hidden="true" />
                          </div>
                        </div>
                        <small>{step.label}</small>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                        <div className="process-card-arrow" aria-hidden="true">
                          <ArrowRight />
                        </div>
                      </article>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            <Reveal className="process-cta">
              <MessageCircle aria-hidden="true" />
              <div>
                <strong>Já tem planta, medidas ou fotos?</strong>
                <span>Envie pelo WhatsApp e agilize a análise do seu projeto.</span>
              </div>
              <a href={`${whatsappLink}?text=${encodeURIComponent("Olá, equipe Ciola! Quero enviar informações para análise da minha obra.")}`} target="_blank" rel="noreferrer">
                Conversar agora
                <ArrowRight aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section section-faq">
          <SectionSweep tone="white" />
          <div className="section-wrap faq-grid">
            <Reveal className="faq-intro">
              <p className="eyebrow eyebrow-blue">Dúvidas frequentes</p>
              <h2>Informação <span className="accent-red">clara</span> antes de construir.</h2>
              <p>
                Ainda ficou alguma dúvida? Nossa equipe analisa o seu caso e orienta
                o próximo passo.
              </p>
              <a className="text-link dark-link" href="#orcamento">
                Falar com a equipe
                <ArrowRight aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal className="faq-list" delay={0.08}>
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="quote-section" id="orcamento">
          <SectionSweep tone="navy" direction="left" />
          <div className="quote-grid-bg" aria-hidden="true" />
          <div className="section-wrap quote-grid">
            <Reveal className="quote-copy">
              <p className="eyebrow">Vamos analisar sua obra?</p>
              <h2>O próximo projeto pode começar por aqui.</h2>
              <p>
                Compartilhe as informações iniciais. Ao enviar, uma conversa será
                aberta com a equipe Ciola no WhatsApp.
              </p>
              <div className="quote-contact">
                <a href="tel:+5544998024618">
                  <Phone aria-hidden="true" />
                  <span><small>Telefone e WhatsApp</small>(44) 9 9802-4618</span>
                </a>
                <a href="mailto:ciolavendas@gmail.com">
                  <Mail aria-hidden="true" />
                  <span><small>E-mail comercial</small>ciolavendas@gmail.com</span>
                </a>
                <div>
                  <MapPin aria-hidden="true" />
                  <span><small>Fábrica</small>Via do Trabalhador, 41 · Campo Mourão—PR</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="quote-form-wrap" delay={0.1}>
              <form className="quote-form" onSubmit={submitQuote}>
                <div className="form-top">
                  <span>ANÁLISE INICIAL</span>
                  <small>01 / 01</small>
                </div>
                <FieldGroup className="form-fields">
                  <div className="form-row">
                    <Field>
                      <FieldLabel htmlFor="nome">Seu nome</FieldLabel>
                      <Input id="nome" name="nome" placeholder="Como podemos chamar você?" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="whatsapp">Seu WhatsApp</FieldLabel>
                      <Input id="whatsapp" name="whatsapp" type="tel" placeholder="(44) 99999-9999" required />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="cidade">Cidade/UF da obra</FieldLabel>
                    <Input id="cidade" name="cidade" placeholder="Ex.: Campo Mourão/PR" required />
                  </Field>
                  <Field>
                    <FieldLabel id="servico-label">Qual solução você precisa?</FieldLabel>
                    <Select value={service} onValueChange={(value) => value && setService(value)}>
                      <SelectTrigger className="form-select" aria-labelledby="servico-label">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Barracões, estruturas e coberturas">Barracões, estruturas e coberturas</SelectItem>
                        <SelectItem value="Laje protendida ou treliçada">Laje protendida ou treliçada</SelectItem>
                        <SelectItem value="Casa pré-moldada — estrutura">Casa pré-moldada — estrutura</SelectItem>
                        <SelectItem value="Artefatos de concreto">Artefatos de concreto</SelectItem>
                        <SelectItem value="Outro projeto">Outro projeto</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="detalhes">Medidas e detalhes da obra</FieldLabel>
                    <Textarea
                      id="detalhes"
                      name="detalhes"
                      placeholder="Conte a finalidade, medidas aproximadas e o que já possui de projeto."
                      rows={4}
                      required
                    />
                  </Field>
                </FieldGroup>
                <p className="form-note">
                  O valor é definido após análise das medidas, da aplicação, do local
                  e do escopo de entrega e montagem.
                </p>
                <button className="button button-submit" type="submit">
                  Enviar pelo WhatsApp
                  <MessageCircle aria-hidden="true" />
                </button>
                {sent && (
                  <p className="form-success" role="status">
                    Conversa aberta. Se a nova aba não apareceu, verifique o bloqueio de pop-ups.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </section>

        <section className="section location-section" id="localizacao">
          <SectionSweep tone="light" />
          <div className="section-wrap location-grid">
            <Reveal className="location-copy">
              <p className="eyebrow eyebrow-blue">Onde estamos</p>
              <h2>Venha conhecer a <span className="accent-red">Ciola</span> em Campo Mourão.</h2>
              <p>
                A fábrica fica na Via do Trabalhador, com atendimento para analisar
                sua necessidade e orientar o melhor caminho para a obra.
              </p>
              <div className="location-address">
                <MapPin aria-hidden="true" />
                <span>
                  <small>Endereço</small>
                  Via do Trabalhador, 41<br />Campo Mourão—PR
                </span>
              </div>
              <a
                className="button location-route"
                href="https://www.google.com/maps/dir/?api=1&destination=Ciola%20Pr%C3%A9-Moldados%2C%20Campo%20Mour%C3%A3o%20PR"
                target="_blank"
                rel="noreferrer"
              >
                Traçar rota no Google Maps
                <ArrowRight aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal className="location-map" delay={0.08}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.0811862623227!2d-52.4278989!3d-24.0634454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed75bdda8e14ab%3A0x9f58bb2961d0e8ca!2sCiola%20Pr%C3%A9-Moldados!5e0!3m2!1spt-BR!2sbr!4v1788309484399!5m2!1spt-BR!2sbr"
                title="Localização da Ciola Pré-Moldados em Campo Mourão"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="location-map-label">
                <span>Ciola Pré-Moldados</span>
                <small>Campo Mourão · Paraná</small>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="site-footer">
          <div className="section-wrap footer-main">
            <div className="footer-brand">
              <img src="/brand/ciola-logo.png" alt="Ciola Pré-Moldados" />
              <p>Pré-moldados feitos para sustentar o que vem pela frente.</p>
            </div>
            <div>
              <h3>Navegue</h3>
              <a href="#solucoes">Soluções</a>
              <a href="#lajes">Lajes protendidas e treliçadas</a>
              <a href="#historia">45 anos de história</a>
              <a href="#obras">Obras realizadas</a>
              <a href="#processo">Como funciona</a>
              <a href="#localizacao">Localização</a>
              <a href="#orcamento">Solicitar orçamento</a>
            </div>
            <div>
              <h3>Contato</h3>
              <a href="tel:+5544998024618">(44) 9 9802-4618</a>
              <a href="mailto:ciolavendas@gmail.com">ciolavendas@gmail.com</a>
              <span>Campo Mourão · Paraná</span>
            </div>
            <div>
              <h3>Acompanhe</h3>
              <a href="https://www.instagram.com/ciolapremoldados/" target="_blank" rel="noreferrer">
                <Camera aria-hidden="true" />
                @ciolapremoldados
              </a>
            </div>
          </div>
          <div className="section-wrap footer-bottom">
            <span>© 2026 Ciola Pré-Moldados. Todos os direitos reservados.</span>
            <span>Campo Mourão—PR</span>
          </div>
        </footer>

        <a
          className="floating-whatsapp"
          href={`${whatsappLink}?text=${encodeURIComponent("Olá, equipe Ciola! Gostaria de solicitar um orçamento.")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a Ciola no WhatsApp"
        >
          <MessageCircle aria-hidden="true" />
          <span>Falar no WhatsApp</span>
        </a>
      </main>
    </MotionConfig>
  )
}
