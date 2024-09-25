module ViteHelpers
  def asset_path(*args)
    if args.size == 1
      super(File.extname(args[0]).delete(".").to_sym, args[0])
    else
      super
    end
  end
end
