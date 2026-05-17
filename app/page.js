import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaTruck, FaMountain, FaHardHat, FaCheckCircle, FaRoute, FaShieldAlt } from 'react-icons/fa';

const whatsapp = 'https://wa.me/5534997205212?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20PH%20Areia%20e%20Britas%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.';
const instagram = 'https://www.instagram.com/phareiabritasetransportes_/';
const maps = 'https://maps.google.com/?q=Rua%20Vaticano%20460%20Uberl%C3%A2ndia%20MG';

const services = [
  ['Areia para construção', 'Fornecimento de areia para obras, reformas, alvenaria, concreto e acabamento.'],
  ['Britas de diversos tipos', 'Britas para concreto, drenagem, base, aterro, pavimentação e serviços gerais.'],
  ['Transporte e entrega', 'Entrega rápida com organização, comunicação clara e atendimento direto pelo WhatsApp.'],
  ['Atendimento para obras', 'Suporte para clientes, pedreiros, construtoras, empreiteiros e consumidores finais.'],
  ['Orçamento rápido', 'Solicite preço, quantidade e disponibilidade de forma simples e objetiva.'],
  ['Retirada e entrega local', 'Atendimento em Uberlândia e região, com endereço físico na Rua Vaticano 460.'],
];

const differentials = [
  ['Preço competitivo', 'Condições pensadas para quem precisa comprar bem e receber com agilidade.'],
  ['Entrega rápida', 'Atendimento prático para reduzir atrasos na sua obra.'],
  ['Atendimento direto', 'Fale no WhatsApp e receba orientação sobre o material ideal.'],
  ['Empresa local', 'Presença em Uberlândia com endereço físico e horário de atendimento definido.'],
];

const faq = [
  ['A PH Areia e Britas entrega em Uberlândia?', 'Sim. A empresa atende em Uberlândia e região. Para confirmar a entrega no seu bairro, envie sua localização pelo WhatsApp.'],
  ['Quais materiais vocês vendem?', 'A PH trabalha com areia, britas e transporte para construção, reforma, obras e serviços gerais.'],
  ['Como faço um orçamento?', 'Clique no botão de WhatsApp, informe o material desejado, quantidade aproximada e endereço de entrega.'],
  ['Qual é o horário de funcionamento?', 'De segunda a sexta das 7:00 às 17:30 e aos sábados das 7:00 às 12:00.'],
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PH Areia e Britas Transportes',
    description: 'Areia, britas e transporte em Uberlândia.',
    telephone: '+55 34 99720-5212',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Vaticano 460',
      addressLocality: 'Uberlândia',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '17:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '12:00' },
    ],
    areaServed: ['Uberlândia', 'Minas Gerais'],
    url: 'https://ph-areia-britas-transportes.vercel.app',
    sameAs: [instagram],
    makesOffer: services.map(([name, description]) => ({ '@type': 'Offer', name, description })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-phDark text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#inicio" aria-label="PH Areia e Britas Transportes" className="flex items-center">
            <img src="/assets/logo-ph-areia-britas.png" alt="Logo PH Areia e Britas Transportes" className="h-14 w-auto object-contain md:h-16" />
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a href="#servicos" className="transition hover:text-phRed">Serviços</a>
            <a href="#diferenciais" className="transition hover:text-phRed">Diferenciais</a>
            <a href="#localizacao" className="transition hover:text-phRed">Localização</a>
            <a href="#faq" className="transition hover:text-phRed">Dúvidas</a>
          </div>

          <div className="flex items-center gap-3">
            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram PH Areia e Britas" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-white/10">
              <FaInstagram className="text-xl" />
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp PH Areia e Britas" className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,.35)] transition hover:-translate-y-1 hover:scale-110">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="bg-industrial relative px-4 pb-20 pt-36 md:px-6 md:pb-28 md:pt-44">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(216,0,0,.22),transparent_32%),linear-gradient(120deg,rgba(0,0,0,.78),rgba(9,9,11,.93))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-phRed/40 bg-phRed/10 px-4 py-2 text-sm font-black uppercase tracking-[.2em] text-red-300">
              Areia • Britas • Transportes em Uberlândia
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Material para sua obra com <span className="text-gradient">entrega rápida e atendimento sério.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A PH Areia e Britas Transportes atende obras, reformas e construções com areia, britas e transporte em Uberlândia. Solicite orçamento pelo WhatsApp e receba atendimento direto.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-phRed to-red-600 px-8 py-5 font-black text-white shadow-redGlow transition hover:-translate-y-1">
                <FaWhatsapp /> Pedir orçamento agora
              </a>
              <a href="#localizacao" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-5 font-bold text-white transition hover:bg-white/10">
                <FaMapMarkerAlt className="text-phRed" /> Ver localização
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[['Rua Vaticano 460', FaMapMarkerAlt], ['Seg a sex: 7h às 17h30', FaClock], ['Sábado: 7h às 12h', FaCheckCircle]].map(([text, Icon]) => (
                <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-200 backdrop-blur">
                  <Icon className="mb-3 text-xl text-phRed" />{text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-phRed/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.02] p-8 shadow-[0_25px_90px_rgba(0,0,0,.45)]">
              <img src="/assets/logo-ph-areia-britas.png" alt="PH Areia e Britas Transportes" className="mx-auto w-full max-w-sm object-contain" />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[[FaMountain, 'Areia e britas'], [FaTruck, 'Transporte'], [FaHardHat, 'Obras'], [FaRoute, 'Entrega local']].map(([Icon, text]) => (
                  <div key={text} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <Icon className="mx-auto mb-3 text-2xl text-phRed" />
                    <p className="text-sm font-black text-white">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative px-4 py-24 md:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(216,0,0,.16),transparent_35%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[.3em] text-red-400">Serviços</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Areia, brita e transporte para quem precisa manter a obra em movimento.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Estrutura pensada para atender clientes residenciais, pequenas obras, reformas e profissionais da construção civil em Uberlândia.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, desc], index) => (
              <article key={title} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[.08] to-white/[.03] p-6 transition hover:-translate-y-2 hover:border-phRed/60 hover:shadow-redGlow">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-phRed/10 transition group-hover:bg-phRed/20" />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-phRed/30 bg-phRed/10 text-lg font-black text-red-300">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="relative text-xl font-black text-white">{title}</h3>
                <p className="relative mt-3 leading-7 text-slate-300">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="bg-black/40 px-4 py-24 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[.3em] text-red-400">Por que escolher</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Atendimento direto, preço competitivo e foco na entrega.</h2>
            <p className="mt-5 leading-8 text-slate-300">Quem está construindo precisa de fornecedor que responde, orienta e entrega. Por isso, o site direciona o visitante para orçamento rápido no WhatsApp.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {differentials.map(([title, desc]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[.04] p-6">
                <FaShieldAlt className="mb-4 text-2xl text-phRed" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="localizacao" className="relative h-[72vh] min-h-[560px] w-full overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <iframe title="Localização PH Areia e Britas Transportes" src="https://www.google.com/maps?q=Rua%20Vaticano%20460%20Uberl%C3%A2ndia%20MG&output=embed" className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className="absolute bottom-0 left-0 z-20 w-full p-5 md:p-10">
          <div className="max-w-xl rounded-[30px] border border-white/10 bg-black/75 p-6 backdrop-blur-xl md:p-8">
            <span className="inline-flex rounded-full border border-phRed/30 bg-phRed/10 px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-red-300">Localização</span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">PH Areia e Britas Transportes</h2>
            <p className="mt-4 leading-8 text-slate-300">Atendimento presencial e entregas para Uberlândia e região.</p>
            <div className="mt-5 space-y-3 text-slate-200">
              <p><FaMapMarkerAlt className="mr-2 inline text-phRed" /> Rua Vaticano 460</p>
              <p><FaClock className="mr-2 inline text-phRed" /> Segunda a sexta: 7:00 às 17:30 • Sábado: 7:00 às 12:00</p>
              <p><FaWhatsapp className="mr-2 inline text-green-400" /> (34) 99720-5212</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-black text-black transition hover:-translate-y-1">Abrir no Google Maps</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-4 font-black text-white transition hover:-translate-y-1">Chamar no WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative px-4 py-24 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-black uppercase tracking-[.3em] text-red-400">Dúvidas frequentes</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Antes de pedir seu orçamento</h2>
            <p className="mt-5 leading-8 text-slate-300">Informações importantes para quem procura areia, brita, transporte e entrega em Uberlândia.</p>
          </div>
          <div className="space-y-4">
            {faq.map(([question, answer], index) => (
              <details key={question} className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[.08] to-white/[.03] transition hover:border-phRed/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 text-lg font-black">
                  <span className="flex items-center gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-phRed/10 text-sm text-red-300">{String(index + 1).padStart(2, '0')}</span>{question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-red-300 transition group-open:rotate-45 group-open:bg-phRed group-open:text-white">+</span>
                </summary>
                <div className="border-t border-white/10 px-6 pb-6 pt-5"><p className="leading-8 text-slate-300">{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-phRed/20 via-black to-zinc-950 p-8 text-center shadow-redGlow md:p-14">
          <span className="inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-black uppercase tracking-[.2em] text-red-300">Orçamento rápido</span>
          <h2 className="mt-6 text-3xl font-black md:text-5xl">Precisa de areia, brita ou transporte?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Fale com a PH Areia e Britas Transportes e receba atendimento direto para sua obra ou reforma.</p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-5 font-black text-white shadow-[0_0_35px_rgba(34,197,94,.35)] transition hover:-translate-y-1"><FaWhatsapp /> Chamar no WhatsApp</a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 md:px-6">
        <p>PH Areia e Britas Transportes — Areia, britas e transporte em Uberlândia.</p>
        <p className="mt-2"><FaMapMarkerAlt className="mr-1 inline text-phRed" /> Rua Vaticano 460 • WhatsApp: (34) 99720-5212</p>
        <p className="mt-4 text-slate-500">Desenvolvido por: <a href="https://kinkajoudev.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-red-400 transition hover:text-white">Kinkajou Dev</a></p>
      </footer>

      <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_35px_rgba(34,197,94,.5)] transition hover:-translate-y-1 hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16">
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  );
}
