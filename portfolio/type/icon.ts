export type IconProps = {
    icon: {
        name: string;
        color: string;
        href: string;
        import: React.FC<IconProps>;
    }
  };