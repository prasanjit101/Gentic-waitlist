export const LogoIcon = ({ logoSize }: { logoSize: string }) => {
  return (
    <img
      src="/logo.svg"
      alt="Gentic Logo"
      className={"text-primary " + logoSize}
    />
  );
};

export const Logo = ({ loading = false, className, showName = false, logoSize = 'w-8 h-8' }: { className?: string; loading?: boolean; showName?: boolean; logoSize?: string }) => {
  return (
    <div className={"font-semibold flex items-center gap-2 " + className}>
      <LogoIcon logoSize={logoSize} />
      {showName && (
        <span className="text-lg tracking-tight font-bold text-primary">
          {loading ? 'Loading...' : 'Gentic'}
        </span>
      )}
    </div>
  );
};
