type Props = {
  location: string;
};

export function SiteFooter({ location }: Props) {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted">
      Built with curiosity · {location}
    </footer>
  );
}
