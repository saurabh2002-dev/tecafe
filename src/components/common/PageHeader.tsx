import Link from "next/link";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="page-header" style={{
            padding: "100px 0 60px",
            background: "linear-gradient(180deg, #0a0a0a 0%, #000 100%)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Animated Background Elements */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(0, 217, 255, 0.06) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none"
            }}></div>

            <div style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
                filter: "blur(50px)",
                pointerEvents: "none"
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-header-box text-center">
                            <h1 className="mb-4 wow fadeInUp" style={{
                                fontSize: "56px",
                                fontWeight: "700",
                                letterSpacing: "-1.5px",
                                lineHeight: "1.2"
                            }}>
                                <span className="text-gradient">{title}</span>
                            </h1>
                            {subtitle && (
                                <p className="wow fadeInUp" data-wow-delay="0.05s" style={{
                                    maxWidth: "720px",
                                    margin: "0 auto 24px",
                                    color: "rgba(255, 255, 255, 0.7)",
                                    fontSize: "16px"
                                }}>
                                    {subtitle}
                                </p>
                            )}
                            {breadcrumbs && breadcrumbs.length > 0 && (
                                <nav className="wow fadeInUp" data-wow-delay="0.1s">
                                    <ol className="breadcrumb justify-content-center" style={{
                                        background: "rgba(255, 255, 255, 0.05)",
                                        padding: "8px 20px",
                                        margin: 0,
                                        borderRadius: "30px",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        display: "inline-flex",
                                        gap: "8px"
                                    }}>
                                        {breadcrumbs.map((crumb, index) => (
                                            <li
                                                key={index}
                                                className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? "active" : ""}`}
                                                style={{ fontSize: "13px", fontWeight: "400" }}
                                            >
                                                {crumb.href ? (
                                                    <Link href={crumb.href} style={{
                                                        color: "rgba(255, 255, 255, 0.6)",
                                                        textDecoration: "none",
                                                        transition: "color 0.3s ease"
                                                    }}>
                                                        {crumb.label}
                                                    </Link>
                                                ) : (
                                                    <span style={{ color: "var(--primary-color)", fontWeight: "500" }}>{crumb.label}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
