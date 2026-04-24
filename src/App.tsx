import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Github,
  Headphones,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Puzzle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import type { CSSProperties, FormEvent } from "react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CaseStudy = {
  industry: string;
  title: string;
  description: string;
  accent: string;
  metrics: Array<{ value: string; label: string }>;
  rows: Array<{ id: string; item: string; status: string; progress: string; due: string }>;
};

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Sobre", href: "#sobre" },
];

const services: Service[] = [
  {
    title: "Sistemas web",
    description: "Portais, ERPs internos, CRMs e plataformas operacionais sob medida.",
    icon: Code2,
  },
  {
    title: "Aplicativos mobile",
    description: "Apps para equipes, clientes e rotinas de campo com dados sincronizados.",
    icon: Smartphone,
  },
  {
    title: "Integrações e APIs",
    description: "Conectamos sistemas, gateways, ERPs, CRMs, automações e dados legados.",
    icon: Puzzle,
  },
  {
    title: "Automação de processos",
    description: "Fluxos digitais para reduzir retrabalho, aprovações manuais e gargalos.",
    icon: Bot,
  },
  {
    title: "Dados e BI",
    description: "Dashboards, indicadores e bases confiáveis para decisões de gestão.",
    icon: BarChart3,
  },
  {
    title: "Sustentação evolutiva",
    description: "Monitoramento, melhorias contínuas e suporte próximo depois da entrega.",
    icon: Headphones,
  },
];

const processSteps = [
  {
    title: "Descoberta",
    description: "Mapeamos objetivos, gargalos, usuários e critérios de sucesso.",
    icon: Sparkles,
  },
  {
    title: "Arquitetura",
    description: "Definimos stack, integrações, segurança e plano de entregas.",
    icon: Workflow,
  },
  {
    title: "Desenvolvimento",
    description: "Construímos em ciclos curtos com demos, feedback e código versionado.",
    icon: Code2,
  },
  {
    title: "Validação",
    description: "Testamos fluxos críticos, performance, dados e experiência do usuário.",
    icon: ShieldCheck,
  },
  {
    title: "Evolução",
    description: "Acompanhamos produção, indicadores e próximas melhorias.",
    icon: ArrowRight,
  },
];

const caseStudies: CaseStudy[] = [
  {
    industry: "Indústria",
    title: "Plataforma de gestão integrada para produção e distribuição",
    description:
      "Unificação de ordens de produção, estoque, expedição e indicadores para uma operação com menos retrabalho.",
    accent: "#004f56",
    metrics: [
      { value: "-32%", label: "tempo de fechamento mensal" },
      { value: "+28%", label: "produtividade operacional" },
      { value: "99,9%", label: "disponibilidade da plataforma" },
    ],
    rows: [
      { id: "OP-1048", item: "Produto A", status: "Em produção", progress: "68%", due: "24/05" },
      { id: "OP-1047", item: "Produto B", status: "Em produção", progress: "42%", due: "25/05" },
      { id: "OP-1046", item: "Qualidade", status: "Validação", progress: "89%", due: "23/05" },
      { id: "OP-1045", item: "Expedição", status: "Concluído", progress: "100%", due: "20/05" },
    ],
  },
  {
    industry: "Logística",
    title: "Cockpit de entregas com rastreio, SLA e integrações",
    description:
      "Visão única de rotas, ocorrências e faturamento para reduzir atrasos e aumentar previsibilidade.",
    accent: "#5e8fa6",
    metrics: [
      { value: "+41%", label: "entregas acompanhadas em tempo real" },
      { value: "-26%", label: "chamados por falha de informação" },
      { value: "12", label: "integrações entre sistemas" },
    ],
    rows: [
      { id: "RT-2251", item: "Rota Sul", status: "No prazo", progress: "76%", due: "Hoje" },
      { id: "RT-2252", item: "Rota Norte", status: "Atenção", progress: "51%", due: "Hoje" },
      { id: "RT-2253", item: "Coleta B2B", status: "No prazo", progress: "84%", due: "Amanhã" },
      { id: "RT-2254", item: "Ocorrência", status: "Tratativa", progress: "35%", due: "Hoje" },
    ],
  },
  {
    industry: "Serviços",
    title: "Portal de atendimento com contratos e indicadores",
    description:
      "Central de solicitações, aprovações, documentos e BI para melhorar o relacionamento com clientes.",
    accent: "#b9904d",
    metrics: [
      { value: "64h", label: "economizadas por mês" },
      { value: "+36%", label: "resolução no primeiro contato" },
      { value: "4,8/5", label: "satisfação dos usuários" },
    ],
    rows: [
      { id: "CH-7821", item: "Contrato", status: "Aprovação", progress: "72%", due: "Hoje" },
      { id: "CH-7822", item: "Financeiro", status: "Respondido", progress: "100%", due: "Ontem" },
      { id: "CH-7823", item: "Onboarding", status: "Em andamento", progress: "58%", due: "26/05" },
      { id: "CH-7824", item: "Relatorio", status: "Aberto", progress: "18%", due: "28/05" },
    ],
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  ".NET",
  "PostgreSQL",
  "APIs REST",
  "Docker",
  "Render",
  "AWS",
  "Power BI",
  "Figma",
];

function MarianIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Ícone mariano">
      <path className="marian-bg" d="M8 18c0-5.5 4.5-10 10-10h28c5.5 0 10 4.5 10 10v28c0 5.5-4.5 10-10 10H18C12.5 56 8 51.5 8 46V18Z" />
      <path className="marian-crown" d="M22 18l5.5 5 4.5-7 4.5 7 5.5-5 1.8 11H20.2L22 18Z" />
      <path className="marian-mantle" d="M32 27c-7.6 6.4-12.1 14.7-13.4 25h26.8C44.1 41.7 39.6 33.4 32 27Z" />
      <path className="marian-inner" d="M32 31c-3.8 5.2-5.8 11-6 17.4h12C37.8 42 35.8 36.2 32 31Z" />
      <path className="marian-star" d="M32 10l1.2 3.2 3.4.2-2.6 2.1.9 3.3-2.9-1.8-2.9 1.8.9-3.3-2.6-2.1 3.4-.2L32 10Z" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Gratia Plena Sistemas">
      <span className="brand-mark" aria-hidden="true">
        <MarianIcon />
      </span>
      <span className="brand-copy">
        <strong>Gratia Plena</strong>
        <span>Sistemas</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? "nav nav-open" : "nav"} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contato">
          Falar com um especialista
          <ArrowRight size={17} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Desenvolvimento de software sob demanda</p>
          <h1>Sistemas customizados para acelerar operacoes e impulsionar resultados.</h1>
          <p className="hero-lead">
            Desenvolvemos plataformas web, aplicativos, integracoes e automacoes para empresas
            que precisam de tecnologia confiável, segura e alinhada ao seu negócio.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Falar com um especialista
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#cases">
              Ver cases de sucesso
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-points" aria-label="Diferenciais">
            <span>
              <ShieldCheck size={20} />
              Soluções seguras e escaláveis
            </span>
            <span>
              <Code2 size={20} />
              Tecnologia moderna e integrações
            </span>
            <span>
              <Clock3 size={20} />
              Entregas ágeis com transparência
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Visual de plataforma de software customizada">
          <div className="visual-frame">
            <img
              src="/assets/software-system-map.png"
              alt="Sistema modular com dashboards, conectores de API, bases de dados e automações"
            />
            <div className="visual-status status-top">
              <Database size={18} />
              <span>
                <strong>Dados</strong>
                Sincronizado
              </span>
            </div>
            <div className="visual-status status-bottom">
              <Workflow size={18} />
              <span>
                <strong>Fluxos</strong>
                Automatizado
              </span>
            </div>
          </div>
          <div className="platform-card">
            <div className="platform-sidebar">
              <span className="mini-logo">
                <MarianIcon />
              </span>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="platform-content">
              <div className="platform-header">
                <span>Plataforma corporativa</span>
                <small>200 OK</small>
              </div>
              <div className="metric-grid">
                <div>
                  <span>Receita</span>
                  <strong>R$ 2,4 mi</strong>
                </div>
                <div>
                  <span>Pedidos</span>
                  <strong>1.842</strong>
                </div>
                <div>
                  <span>Margem</span>
                  <strong>23,7%</strong>
                </div>
              </div>
              <div className="line-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  const sectors = ["Indústria", "Logística", "Saúde", "Educação", "Serviços", "Varejo"];

  return (
    <section className="proof-strip" aria-label="Setores atendidos">
      <div className="container">
        <p className="eyebrow">Setores que atendemos</p>
        <div className="sector-row">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="solucoes">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Soluções</p>
          <h2>Software feito para o seu processo, não para uma prateleira.</h2>
          <p>
            Projetamos e construímos sistemas que acompanham a realidade da operação, com
            arquitetura preparada para crescer.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="processo">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">Como trabalhamos</p>
          <h2>Um processo claro para entregar o que o seu negócio precisa.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="process-step" key={step.title}>
                <div className="process-icon">
                  <Icon size={22} />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudyDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = caseStudies[activeIndex];

  const apiSnippet = useMemo(
    () => [
      "{",
      `  "projeto": "${activeCase.industry.toLowerCase()}",`,
      '  "status": "operacao_estavel",',
      `  "itens": ${activeCase.rows.length},`,
      '  "latencia": "124ms"',
      "}",
    ],
    [activeCase],
  );

  function moveCase(direction: "prev" | "next") {
    setActiveIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? caseStudies.length - 1 : current - 1;
      }

      return current === caseStudies.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <section className="section case-section" id="cases">
      <div className="container">
        <div className="case-layout">
          <div className="case-copy">
            <p className="eyebrow">Case em destaque</p>
            <div className="case-tabs" role="tablist" aria-label="Selecionar case">
              {caseStudies.map((item, index) => (
                <button
                  key={item.industry}
                  className={index === activeIndex ? "case-tab active" : "case-tab"}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.industry}
                </button>
              ))}
            </div>
            <h2>{activeCase.title}</h2>
            <p>{activeCase.description}</p>
            <div className="case-metrics">
              {activeCase.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <a className="button button-outline" href="#contato">
              Conversar sobre um projeto parecido
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="case-demo" style={{ "--case-accent": activeCase.accent } as CSSProperties}>
            <div className="demo-sidebar">
              <span className="mini-logo">
                <MarianIcon />
              </span>
              <a href="#cases">Home</a>
              <a href="#cases">Pedidos</a>
              <a href="#cases">Produção</a>
              <a href="#cases">Estoque</a>
              <a href="#cases">Relatórios</a>
            </div>
            <div className="demo-main">
              <div className="demo-toolbar">
                <span>{activeCase.industry}</span>
                <div>
                  <button type="button" onClick={() => moveCase("prev")} aria-label="Case anterior">
                    <ArrowLeft size={16} />
                  </button>
                  <button type="button" onClick={() => moveCase("next")} aria-label="Próximo case">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="data-table" role="table" aria-label="Itens do case selecionado">
                <div className="table-row table-head" role="row">
                  <span>OP</span>
                  <span>Item</span>
                  <span>Status</span>
                  <span>Progresso</span>
                  <span>Entrega</span>
                </div>
                {activeCase.rows.map((row) => (
                  <div className="table-row" role="row" key={row.id}>
                    <span>{row.id}</span>
                    <span>{row.item}</span>
                    <span>{row.status}</span>
                    <span>
                      <i style={{ width: row.progress }} />
                      {row.progress}
                    </span>
                    <span>{row.due}</span>
                  </div>
                ))}
              </div>
              <div className="demo-micro">
                <div>
                  <span>OEE</span>
                  <strong>78%</strong>
                </div>
                <div>
                  <span>Refugo</span>
                  <strong>2,1%</strong>
                </div>
                <div>
                  <span>No prazo</span>
                  <strong>96%</strong>
                </div>
              </div>
            </div>
            <pre className="api-panel" aria-label="Resposta de API simulada">
              {apiSnippet.join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      title: "Sob medida de verdade",
      description: "Desenhamos exatamente o que o negócio precisa, sem excesso de complexidade.",
      icon: Layers3,
    },
    {
      title: "Visão de produto",
      description: "Unimos tecnologia, experiência de usuário e prioridade operacional.",
      icon: CheckCircle2,
    },
    {
      title: "Arquitetura preparada",
      description: "Escolhas técnicas pensadas para segurança, manutenção e crescimento.",
      icon: ShieldCheck,
    },
    {
      title: "Parceria continua",
      description: "Acompanhamos o sistema em produção e apoiamos novas etapas.",
      icon: Headphones,
    },
  ];

  return (
    <section className="section why-section" id="sobre">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">Por que a Gratia Plena Sistemas</p>
          <h2>Parceria, tecnologia e compromisso com resultado.</h2>
        </div>
        <div className="why-grid">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article className="why-item" key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="section tech-section" id="tecnologias">
      <div className="container tech-layout">
        <div>
          <p className="eyebrow">Tecnologias</p>
          <h2>Stack escolhida para cada desafio.</h2>
        </div>
        <div className="tech-cloud" aria-label="Tecnologias utilizadas">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const company = String(formData.get("company") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`Projeto sob demanda - ${company || name}`);
    const body = encodeURIComponent(
      [`Nome: ${name}`, `Empresa: ${company}`, "", "Mensagem:", message].join("\n"),
    );

    setStatus("Seu aplicativo de e-mail foi aberto com a mensagem do projeto.");
    window.location.href = `mailto:contato@gratiaplenasistemas.com.br?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contato">
      <div className="container contact-panel">
        <div className="contact-copy">
          <span className="brand-mark large" aria-hidden="true">
            <MarianIcon />
          </span>
          <p className="eyebrow">Pronto para transformar sua operação?</p>
          <h2>Vamos conversar sobre o sistema ideal para o seu negócio.</h2>
          <p>
            Conte rapidamente o desafio. Respondemos com um caminho inicial, escopo provável e
            próximos passos para tirar o projeto do papel.
          </p>
          <a href="mailto:contato@gratiaplenasistemas.com.br">
            contato@gratiaplenasistemas.com.br
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Empresa
            <input name="company" type="text" autoComplete="organization" required />
          </label>
          <label>
            Desafio principal
            <textarea name="message" rows={5} required />
          </label>
          <button className="button button-primary light" type="submit">
            Preparar e-mail
            <Mail size={18} />
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Desenvolvimento de software sob demanda para empresas que buscam eficiência,
            integração e crescimento.
          </p>
        </div>
        <div>
          <h3>Navegação</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Soluções</h3>
          {services.slice(0, 5).map((service) => (
            <a key={service.title} href="#solucoes">
              {service.title}
            </a>
          ))}
        </div>
        <div>
          <h3>Contato</h3>
          <a href="mailto:contato@gratiaplenasistemas.com.br">contato@gratiaplenasistemas.com.br</a>
          <span>Atendimento remoto em todo o Brasil</span>
          <div className="social-row" aria-label="Redes sociais">
            <a href="#contato" aria-label="LinkedIn da Gratia Plena Sistemas">
              <Linkedin size={19} />
            </a>
            <a href="https://github.com/dcfdl/gratia-plena" aria-label="GitHub do projeto">
              <Github size={19} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Gratia Plena Sistemas. Todos os direitos reservados.</span>
        <span>Software sob demanda com clareza, segurança e suporte.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <Process />
        <CaseStudyDemo />
        <WhyUs />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
