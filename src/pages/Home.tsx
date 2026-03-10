/*
Design manifesto (commitment):
- Movement: Swiss modernism × cyber minimalism
- Principles: extreme contrast, oversized typography, asymmetric layout, quiet grids
- Color: deep black base + cold cyan highlight + electric violet trace
- Signature motifs: hairline rules, numbered sections, "signal" badges, SVG diagrams
*/

import { useEffect, useMemo } from "react";
import hero from "@/assets/hero.png";
import productGroup from "@/assets/product_group.jpeg";
import camera12mp from "@/assets/camera_12mp.jpeg";
import lookAndAsk from "@/assets/look_and_ask.svg";
import hardwareArch from "@/assets/hardware_arch.svg";
import industryChain from "@/assets/industry_chain.svg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HomeProps {
  targetSection?: string;
}

type NavItem = { id: string; label: string; no: string };

function Hairline() {
  return (
    <div className="h-px w-full bg-white/10" />
  );
}

function SectionLabel({ no, label }: { no: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <div className="text-xs tracking-[0.35em] text-white/55">{no}</div>
      <div className="text-sm tracking-[0.18em] text-white/80 uppercase">
        {label}
      </div>
    </div>
  );
}

function GlowBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_32px_rgba(88,255,255,0.06)]">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.18_190)] shadow-[0_0_18px_rgba(88,255,255,0.65)]" />
      {children}
    </span>
  );
}

function Figure({
  src,
  caption,
  credit,
  className,
}: {
  src: string;
  caption: string;
  credit?: string;
  className?: string;
}) {
  return (
    <figure className={cn("space-y-3", className)}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img src={src} alt={caption} className="w-full" loading="lazy" />
      </div>
      <figcaption className="text-xs leading-relaxed text-white/55">
        <span className="text-white/75">{caption}</span>
        {credit ? (
          <span className="block pt-1 text-white/45">来源：{credit}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}

export default function Home({ targetSection }: HomeProps) {
  const nav = useMemo<NavItem[]>(
    () => [
      { id: "cover", label: "封面", no: "00" },
      { id: "fundamentals", label: "基本面", no: "01" },
      { id: "specs", label: "产品构成与参数", no: "02" },
      { id: "ai", label: "AI 应用点", no: "03" },
      { id: "design", label: "设计创新点", no: "04" },
      { id: "industry", label: "产业分析", no: "05" },
      { id: "outlook", label: "总结与展望", no: "06" },
      { id: "sources", label: "参考来源", no: "07" },
    ],
    []
  );

  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen bg-[oklch(0.145_0_0)] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(88,255,255,0.10),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(173,88,255,0.10),transparent_58%),radial-gradient(1200px_circle_at_50%_100%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="noise-layer absolute inset-0 opacity-[0.10] mix-blend-soft-light" />
      </div>

      {/* Top bar with horizontal TOC */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[oklch(0.145_0_0_/_0.72)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.18_190)] shadow-[0_0_18px_rgba(88,255,255,0.55)]" />
              <div className="text-xs tracking-[0.28em] text-white/70">RAY‑BAN META · CASE STUDY</div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <GlowBadge>Dark Mode / 极简排版</GlowBadge>
            </div>
          </div>

          <nav className="w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 text-sm text-white/70">
              {nav.map((it) => (
                <a key={it.id} href={`/#/${it.id}`} className="rounded-md px-3 py-2 hover:bg-white/5 hover:text-white">
                  {it.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-28 pt-10">
        {/* Left sidebar removed - TOC moved to header, personal info moved to footer */}

        {/* Content */}
        <div className="space-y-16">
          {/* Cover */}
          <section id="cover" className="scroll-mt-28">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <img
                src={hero}
                alt="封面背景"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.30),rgba(0,0,0,0.65))]" />
              <div className="relative grid gap-10 p-8 md:grid-cols-[1fr_420px] md:p-12">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <GlowBadge>AI 硬件第二形态</GlowBadge>
                    <GlowBadge>多模态交互</GlowBadge>
                    <GlowBadge>无屏幕计算</GlowBadge>
                  </div>

                  <h1 className="text-4xl leading-[1.06] md:text-6xl">
                    隐形技术的胜利：<br />
                    Ray‑Ban Meta 如何定义 AI 硬件的第二形态
                  </h1>

                  <p className="max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                    智能设计课程案例调研｜以 AIPM 视角拆解产品策略，以工业设计视角审视“无感化”形态与社会心理机制。
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
                    <span>核心命题：从“可穿戴相机”→“环境理解入口”</span>
                    <span className="h-1 w-1 rounded-full bg-white/25" />
                    <span>关键词：PMF / Context Signal / Trust Feature</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <div className="text-xs tracking-[0.3em] text-white/55">ONE‑LINE TAKE</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      2024 的爆发并非硬件堆料，而是“多模态能力下放 + 社交分发场景”带来的 PMF 再确认。
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <div className="text-xs tracking-[0.3em] text-white/55">DELIVERABLE</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      网页长图文 / 幻灯片式叙事结构：可直接投屏展示。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fundamentals */}
          <section id="fundamentals" className="scroll-mt-28 space-y-8">
            <SectionLabel no="01" label="基本面" />
            <Hairline />

            <div className="grid gap-5 grid-cols-1 md:grid-cols-12 items-start">
              <div className="md:col-span-6 space-y-4">
                <h2 className="text-2xl md:text-3xl">产品演进与市场增长分析</h2>

                <motion.div className="relative mt-4 rounded-2xl border border-white/10 bg-white/5 p-6" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5}}>
                  <div className="absolute left-6 top-6 bottom-6 w-px bg-white/6" />
                  <div className="pl-12 pr-4 space-y-8">
                    <motion.div initial={{opacity:0,x:-8}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.45}}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 h-3 w-3 rounded-full bg-[oklch(0.78_0.18_190)] shadow-[0_0_14px_rgba(88,255,255,0.12)]" />
                        <div>
                          <div className="text-xs text-white/55">2023.10 · 开售</div>
                          <div className="mt-1 text-lg font-semibold text-white">基础版上线 · 定价 $299 美元</div>
                          <p className="mt-2 text-sm text-white/75">$299 的亲民定价帮助产品降低入门壁垒，配合 Ray‑Ban 品牌认知实现快速市场覆盖。</p>
                          <div className="mt-2 text-xs text-white/55">（Meta Newsroom, 2023-09）</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div initial={{opacity:0,x:-8}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.06}}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 h-4 w-4 rounded-full bg-[oklch(0.73_0.18_305)] shadow-[0_0_16px_rgba(173,88,255,0.14)] scale-110" />
                        <div>
                          <div className="text-xs text-white/55">2024.04 · 关键转折</div>
                          <div className="mt-1 text-lg font-semibold text-white">多模态 AI（Look and Ask）全面推送</div>
                          <p className="mt-2 text-sm text-white/75">此举将产品从“拍摄工具”本质上跨越为“智能助理”，增强了日常可用性与留存，是产品定位的质变。</p>
                          <div className="mt-2 text-xs text-white/55">（The Verge, 2024-04）</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div initial={{opacity:0,x:-8}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.45, delay:0.12}}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 h-3 w-3 rounded-full bg-white/40" />
                        <div>
                          <div className="text-xs text-white/55">市场表现解读</div>
                          <p className="mt-2 text-sm text-white/75">二代短期内突破 2M+ 的出货量，相比第一代 Ray‑Ban Stories 的表现显示了“经典设计 + 实用 AI”组合达成了产品市场契合（PMF）。供不应求状态反映供应链端对市场热度的低估；TikTok 等平台的病毒传播放大了购买动机并反哺销量。</p>
                          <div className="mt-2 text-xs text-white/55">（Vision Monday, 2025-02；Meta Newsroom, 2024-09）</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/30 p-0">
                  <img src={productGroup} alt="产品示意" className="w-full h-72 object-cover" />
                </div>

                <div className="grid grid-cols-3 gap-5">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <div className="text-xs text-white/55">销量</div>
                    <div className="mt-2 text-2xl font-bold">2M+</div>
                    <div className="mt-1 text-sm text-white/70">短期出货突破</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <div className="text-xs text-white/55">增长</div>
                    <div className="mt-2 text-2xl font-bold">持续加速</div>
                    <div className="mt-1 text-sm text-white/70">社交分发与改进驱动</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <div className="text-xs text-white/55">核心驱动</div>
                    <div className="mt-2 text-2xl font-bold">多模态 AI</div>
                    <div className="mt-1 text-sm text-white/70">从“拍摄”到“助手”的定位升级</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-12">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mt-4">
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div>
                      <div className="text-xs tracking-[0.28em] text-white/55">AIPM 深度洞察</div>
                      <h3 className="mt-2 text-xl">AIPM 视角对比与洞察</h3>
                      <p className="mt-3 text-sm text-white/75">对比第一代的低留存，二代在一年内突破 2M+，说明在产品策略上完成了“形式（经典镜框）与功能（多模态 AI）”的双向适配，从而触达更广泛的使用场景与社交传播路径。</p>
                    </div>
                    <div>
                      <div className="text-sm text-white/75">Ray‑Ban Meta 的关键不是单纯的硬件堆料，而是把环境感知与低摩擦交互结合，形成内容‑分发‑购买的闭环；AIPM 框架下，这代表“能用 + 好用 + 易传播”的三角驱动。</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-12">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 mt-4">
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/8 flex items-center justify-center">M</div>
                      <div>
                        <div className="text-sm font-semibold text-white">Meta</div>
                        <div className="text-xs text-white/65">模型、应用与分发</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-end">
                      <div>
                        <div className="text-sm font-semibold text-white">EssilorLuxottica</div>
                        <div className="text-xs text-white/65">设计、制造与渠道</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/8 flex items-center justify-center">L</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-xs tracking-[0.28em] text-white/55">AIPM INSIGHT</div>
                  <h3 className="mt-2 text-xl">从“功能卖点”到“分发飞轮”</h3>
                </div>
                <div className="max-w-2xl text-sm leading-relaxed text-white/75">
                  Ray‑Ban Meta 在 2024 的关键不是再造一个屏幕，而是把“环境”转化为可调用的 Context Signal，叠加 Instagram / Facebook 等分发网络，形成更低摩擦的内容生产与传播闭环。
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">所属企业：Meta × Luxottica</h2>
                <div className="space-y-4 text-sm leading-relaxed text-white/75">
                  <p>
                    <span className="text-white">Meta（AI/软件侧）：</span>负责 Meta AI、应用生态与云端推理能力。Meta 2024-04 官宣 Meta AI “Built with Llama 3”，并明确 Meta AI 也在美国的 Ray‑Ban Meta 眼镜上可用。
                    <span className="text-white/55">（Meta Newsroom, 2024-04）</span>
                  </p>
                  <p>
                    <span className="text-white">EssilorLuxottica（设计/制造/渠道侧）：</span>负责 Ray‑Ban 品牌资产、规模化制造与全球零售/验光渠道。
                  </p>
                  <p>
                    <span className="text-white">合作延展：</span>EssilorLuxottica 官方表述聚焦 smartglasses，并在新闻稿中强调 Ray‑Ban Meta 在“digital eyewear”方向的牵引作用。
                    <span className="text-white/55">（EssilorLuxottica, FY2024 Results）</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="text-xs tracking-[0.28em] text-white/55">PARTNERSHIP MODEL</div>
                  <div className="mt-3 grid gap-3 text-sm text-white/75">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.18_190)]" />
                      <span><span className="text-white">Meta</span> = 模型 + OS/应用 + 分发</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[oklch(0.73_0.18_305)]" />
                      <span><span className="text-white">EssilorLuxottica</span> = 设计语言 + 制造 + 渠道</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/45" />
                      <span>结果 = “像眼镜的 AI 设备”，更低心理成本</span>
                    </div>
                  </div>
                </div>

                <Figure
                  src={camera12mp}
                  caption="关键硬件卖点的视觉化表达：12MP 超广角相机（示意图）"
                  credit="Meta Newsroom（2023-09）"
                />
              </div>
            </div>
          </section>

          {/* Specs */}
          <section id="specs" className="scroll-mt-28 space-y-8">
            <SectionLabel no="02" label="产品构成与参数" />
            <Hairline />

            <div className="grid gap-8">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">硬件拆解：最小闭环</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  无屏幕 AI 硬件的“最小闭环”可以用一句话描述：<span className="text-white">看（camera）+ 听/说（mic & speaker）+ 低功耗算力（AR1）</span>。
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>• Snapdragon AR1 Gen1（Meta Newsroom, 2023-09）</li>
                  <li>• 12MP 超广角相机（Meta Newsroom, 2023-09）</li>
                  <li>• 五麦克风阵列（Meta Newsroom, 2023-09）</li>
                </ul>
              </div>

              <Figure
                src={hardwareArch}
                caption="核心组件关系图（课程自绘）"
                credit="根据 Meta Newsroom（2023-09）公开信息整理"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs tracking-[0.28em] text-white/55">SPEC TABLE</div>
                  <h3 className="mt-2 text-xl">技术参数表（课堂展示版）</h3>
                </div>
                <GlowBadge>从体验维度翻译参数</GlowBadge>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm">
                  <thead>
                    <tr className="text-xs tracking-[0.22em] text-white/55">
                      <th className="border-b border-white/10 px-4 py-3">模块</th>
                      <th className="border-b border-white/10 px-4 py-3">关键参数（公开/可引用）</th>
                      <th className="border-b border-white/10 px-4 py-3">设计/体验含义</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/75">
                    <tr>
                      <td className="border-b border-white/10 px-4 py-4 text-white">相机</td>
                      <td className="border-b border-white/10 px-4 py-4">12MP 超广角；1080p 视频（最长 60 秒）</td>
                      <td className="border-b border-white/10 px-4 py-4">第一人称内容生产的基础单元</td>
                    </tr>
                    <tr>
                      <td className="border-b border-white/10 px-4 py-4 text-white">音频输入</td>
                      <td className="border-b border-white/10 px-4 py-4">五麦克风阵列；沉浸式录音（immersive audio）</td>
                      <td className="border-b border-white/10 px-4 py-4">提高“声音可信度”，降低后期成本</td>
                    </tr>
                    <tr>
                      <td className="border-b border-white/10 px-4 py-4 text-white">音频输出</td>
                      <td className="border-b border-white/10 px-4 py-4">开放式扬声器（open‑ear）</td>
                      <td className="border-b border-white/10 px-4 py-4">保留环境感知，适合日常/运动场景</td>
                    </tr>
                    <tr>
                      <td className="border-b border-white/10 px-4 py-4 text-white">芯片</td>
                      <td className="border-b border-white/10 px-4 py-4">Snapdragon AR1 Gen1</td>
                      <td className="border-b border-white/10 px-4 py-4">低功耗 + 更快处理，支撑全天候使用</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-white">续航/充电</td>
                      <td className="px-4 py-4">充电盒最多 8 次额外充电（总计 36 小时使用）</td>
                      <td className="px-4 py-4">把“补能”从每日焦虑变成偶发动作</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-3 text-xs text-white/45">注：参数口径来自 Meta Newsroom（2023-09）发布稿。</div>
            </div>
          </section>

          {/* AI */}
          <section id="ai" className="scroll-mt-28 space-y-8">
            <SectionLabel no="03" label="AI 应用点（重点分析）" />
            <Hairline />

            <div className="grid gap-8">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">“Look and Ask”多模态交互逻辑</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  这不是“语音助手 + 相机”的简单叠加，而是一条把现实世界转化为 prompt 的链路：用户在日常场景中几乎零切换成本地提出问题，系统以语音回放完成闭环，并逐步扩展到可执行动作（扫码、提醒、分享）。
                </p>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-white/75">
                  <div className="text-xs tracking-[0.28em] text-white/55">WHY IT MATTERS</div>
                  <p className="mt-3">
                    眼镜的优势不是“信息更多”，而是 <span className="text-white">switching cost 更低</span>：不需要拿出手机、解锁、打开 App、对准镜头。
                  </p>
                </div>
              </div>

              <Figure
                src={lookAndAsk}
                caption="Look and Ask：从唤醒到动作闭环（课程自绘）"
                credit="根据 Meta Newsroom（2024-09）与 TechCrunch（2024-09）整理"
              />
            </div>

            <div className="grid gap-8">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">实时翻译：无屏幕设备的“语言层 API”</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  Meta 在 Connect 2024 相关更新中明确：眼镜将支持实时语音翻译——对方说西/法/意语时，用户可在开放式扬声器中听到英文译文，并计划扩展更多语言。
                  <span className="text-white/55">（Meta Blog, 2024；TechCrunch, 2024-09；Meta Newsroom, 2024-09）</span>
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>• 把翻译从“打开 App”降级为“背景能力”（ambient computing）</li>
                  <li>• 与定向拾音/降噪强耦合：先听清楚谁在说，再译得对</li>
                </ul>
              </div>

              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">智能声场：内容可信度的隐形变量</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  五麦克风阵列被官方用于强调“immersive audio recording”与在嘈杂/有风环境下更好表现。
                  <span className="text-white/55">（Meta Newsroom, 2023-09）</span>
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75">
                  <div className="text-xs tracking-[0.28em] text-white/55">AIPM NOTE</div>
                  <p className="mt-3">
                    画质提升是“可感知卖点”，拾音提升往往是“留存与口碑卖点”。对 Vlog/直播而言，声音决定观众是否愿意停留。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Design */}
          <section id="design" className="scroll-mt-28 space-y-8">
            <SectionLabel no="04" label="设计创新点（工设视角）" />
            <Hairline />

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">功能形式创新：无感化设计</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  “无感化（invisible computing）”的核心不是隐藏所有痕迹，而是在整体造型、材料与细节节奏上，把传感器/扬声器/麦克风变成一种可被接受的“功能肌理”。用户获得的是“仍然像戴 Ray‑Ban”的身份叙事，而不是“我在戴一台设备”。
                </p>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-white/75">
                  <div className="text-xs tracking-[0.28em] text-white/55">DESIGN STRATEGY</div>
                  <p className="mt-3">
                    用成熟的时尚符号降低新硬件的心理门槛，缩短从尝鲜到日常化的 adoption 曲线。
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">社会心理设计：隐私焦虑的可见化治理</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  录制指示灯（capture LED）是面向“被拍者”的交互设计：把“是否在拍”外显化，降低偷拍疑虑与社会张力。
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75">
                  <div className="text-xs tracking-[0.28em] text-white/55">TRUST FEATURE</div>
                  <p className="mt-3">
                    这不是功能堆叠，而是信任机制：把隐私/伦理风险从事后争议前移到当下可感知提示。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Industry */}
          <section id="industry" className="scroll-mt-28 space-y-8">
            <SectionLabel no="05" label="产业分析" />
            <Hairline />

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl">产业链图谱：硬件×模型×渠道</h2>
                <p className="text-sm leading-relaxed text-white/75">
                  Ray‑Ban Meta 的产业协作结构更接近“平台型产品”：芯片提供低功耗计算边界，眼镜企业负责制造与渠道，互联网公司提供模型与分发。任何一环薄弱，都会导致体验与规模化失败。
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>• Qualcomm：Snapdragon AR1 Gen1（Meta Newsroom, 2023-09）</li>
                  <li>• EssilorLuxottica：制造/渠道（Vision Monday, 2025-02；EssilorLuxottica FY2024）</li>
                  <li>• Meta：Meta AI（Built with Llama 3）（Meta Newsroom, 2024-04）</li>
                </ul>
              </div>

              <Figure
                src={industryChain}
                caption="产业链与应用关系图（课程自绘）"
                credit="根据公开资料整理"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-xs tracking-[0.28em] text-white/55">APPLICATION DOMAINS</div>
                  <h3 className="mt-2 text-xl">应用领域：从用例到可扩展市场</h3>
                </div>
                <div className="max-w-2xl text-sm leading-relaxed text-white/75">
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs tracking-[0.22em] text-white/55">01</div>
                      <div className="mt-2 text-white">Vlog/直播创作</div>
                      <div className="mt-2 text-xs text-white/55">POV + 免手持操控</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs tracking-[0.22em] text-white/55">02</div>
                      <div className="mt-2 text-white">无障碍辅助</div>
                      <div className="mt-2 text-xs text-white/55">Be My Eyes POV 通话</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs tracking-[0.22em] text-white/55">03</div>
                      <div className="mt-2 text-white">实时翻译</div>
                      <div className="mt-2 text-xs text-white/55">旅行与跨语言社交</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outlook */}
          <section id="outlook" className="scroll-mt-28 space-y-8">
            <SectionLabel no="06" label="总结与展望" />
            <Hairline />

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_320px]">
                <div className="space-y-5">
                  <h2 className="text-3xl md:text-4xl">从“眼镜”到“AI 饰品化”</h2>
                  <p className="text-sm leading-relaxed text-white/75">
                    Ray‑Ban Meta 的关键启示在于：<span className="text-white">当硬件足够隐形，AI 就会开始“饰品化”</span>——成为身份、风格与社交关系的一部分，而不仅是效率工具。
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <div className="text-xs tracking-[0.28em] text-white/55">方向 A</div>
                      <div className="mt-2 text-white">AI 饰品化</div>
                      <div className="mt-2 text-sm leading-relaxed text-white/70">
                        将能力封装为可更换镜腿模块/挂件：电池、相机、传感器、甚至模型订阅。
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <div className="text-xs tracking-[0.28em] text-white/55">方向 B</div>
                      <div className="mt-2 text-white">无屏幕“第三 UI”</div>
                      <div className="mt-2 text-sm leading-relaxed text-white/70">
                        语音 + 环境视觉 + 触觉/手势，将手机任务流拆成可嵌入生活的 micro‑interactions。
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[radial-gradient(700px_circle_at_20%_20%,rgba(88,255,255,0.14),transparent_60%),radial-gradient(700px_circle_at_70%_30%,rgba(173,88,255,0.14),transparent_60%)] p-6">
                  <div className="text-xs tracking-[0.28em] text-white/55">CLOSING LINE</div>
                  <p className="mt-3 text-lg leading-relaxed text-white">
                    AI 硬件的第二形态不是再造一个屏幕，
                    而是把计算悄悄塞回生活。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section id="sources" className="scroll-mt-28 space-y-8">
            <SectionLabel no="07" label="参考来源" />
            <Hairline />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 rounded-2xl border border-white/6 bg-black/20 p-3 text-xs text-white/60">
                浙江大学 · 工业设计工程 · 课程：智能设计<br />
                学号：22521323 · 姓名：王愉超 · 制作时间：2026-03-09
              </div>
              <ol className="space-y-3 text-sm leading-relaxed text-white/75">
                <li>
                  1. Meta Newsroom (2023-09-27). Introducing the New Ray‑Ban | Meta Smart Glasses.
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://about.fb.com/news/2023/09/new-ray-ban-meta-smart-glasses/" target="_blank" rel="noreferrer">
                    https://about.fb.com/news/2023/09/new-ray-ban-meta-smart-glasses/
                  </a>
                </li>
                <li>
                  2. Meta Newsroom (2024-04). Meet Your New Assistant: Meta AI, Built With Llama 3.
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/" target="_blank" rel="noreferrer">
                    https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/
                  </a>
                </li>
                <li>
                  3. Meta Newsroom (2024-09). Ray‑Ban | Meta Glasses Are Getting New AI Features and More Partner Integrations.
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://about.fb.com/news/2024/09/ray-ban-meta-glasses-new-ai-features-and-partner-integrations/" target="_blank" rel="noreferrer">
                    https://about.fb.com/news/2024/09/ray-ban-meta-glasses-new-ai-features-and-partner-integrations/
                  </a>
                </li>
                <li>
                  4. Meta Blog (Connect 2024). Ray‑Ban | Meta Glasses Continue to Advance With New AI Features…
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://www.meta.com/blog/ray-ban-meta-glasses-collection-news-updates-connect-2024/" target="_blank" rel="noreferrer">
                    https://www.meta.com/blog/ray-ban-meta-glasses-collection-news-updates-connect-2024/
                  </a>
                </li>
                <li>
                  5. TechCrunch (2024-09-25). Meta updates Ray‑Ban smart glasses with real-time AI video, reminders, and QR code scanning.
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://techcrunch.com/2024/09/25/meta-updates-ray-ban-smart-glasses-with-real-time-ai-video-reminders-and-qr-code-scanning/" target="_blank" rel="noreferrer">
                    https://techcrunch.com/2024/09/25/meta-updates-ray-ban-smart-glasses-with-real-time-ai-video-reminders-and-qr-code-scanning/
                  </a>
                </li>
                <li>
                  6. Vision Monday (2025-02-13). EssilorLuxottica Reports Q4 and Full‑Year 2024…（含“reported 2 million units”转述）
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://www.visionmonday.com/eyecare/article/essilorluxottica-reports-q4-and-fullyear-2024-revenue-growth-touts-early-success-of-rayban-meta-smartglasses-and-reaffirms-longterm-guidance/" target="_blank" rel="noreferrer">
                    https://www.visionmonday.com/eyecare/article/essilorluxottica-reports-q4-and-fullyear-2024-revenue-growth-touts-early-success-of-rayban-meta-smartglasses-and-reaffirms-longterm-guidance/
                  </a>
                </li>
                <li>
                  7. EssilorLuxottica Press Release (2025-02-12). Q4/Full Year 2024 Results.
                  <a className="ml-2 text-[oklch(0.78_0.18_190)] underline underline-offset-4" href="https://www.essilorluxottica.com/en/newsroom/press-releases/q4-full-year-2024-results/" target="_blank" rel="noreferrer">
                    https://www.essilorluxottica.com/en/newsroom/press-releases/q4-full-year-2024-results/
                  </a>
                </li>
              </ol>
            </div>

            <footer className="pt-4 text-xs text-white/45">
              © 2026 课堂展示用。图片与引用归原作者/机构所有。
            </footer>
          </section>
        </div>
      </main>

      {/* Mobile TOC */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[oklch(0.145_0_0_/_0.72)] px-4 py-3 backdrop-blur">
          <div className="text-xs tracking-[0.22em] text-white/65">目录</div>
          <div className="flex gap-2 overflow-x-auto">
            {nav.slice(0, 6).map((it) => (
              <a
                key={it.id}
                href={`/#/${it.id}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {it.no}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
