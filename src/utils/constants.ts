import { PublicKey, SystemProgram } from "@solana/web3.js";

export const GLOBAL = new PublicKey(
  "4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf"
);
export const PUMP_FEE_RECIPIENT = new PublicKey(
  "CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM"
);

export const RENT = new PublicKey(
  "SysvarRent111111111111111111111111111111111"
);
export const PUMP_FUN_PROGRAM = new PublicKey(
  "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P"
);

export const PUMP_AMM_PROGRAM = new PublicKey(
  "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA"
);

export const EVENT_AUTHORITY = new PublicKey(
  "Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1"
);
export const SYSTEM_PROGRAM_ID = SystemProgram.programId;

export const MINT_AUTHORITY = new PublicKey(
  "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM"
);

export const MPL_TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export const BLOXROUT_RECEIVER = new PublicKey(
  "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"
);

export const GLOBAL_CONFIG = new PublicKey(
  "ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw"
);

export const TOKEN_PROGRAM = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
)

export const EVENT_AUTHORITY_PUMPSWAP = new PublicKey(
  "GS4CU59F31iL7aR2Q8zVS8DRrcRnXX1yjQ66TqNVQnaR"
)

export const PROTOCOL_FEE_RECEPCIENT = new PublicKey(
  "FWsW1xNtWscwNmKv6wVsU1iTzRN6wmmk3MjxRP5tT7hz"
)

export const PROTOCOL_FEE_RECEPCIENT_TOKEN_ACCOUNT = new PublicKey(
  "7xQYoUjUJF1Kg6WVczoTAkaNhn5syQYcbvjmFrhjWpx"
)


export const TOKEN_DECIMALS = 6;

export const TOTAL_SUPPLY = 10 ** 9;

export const WSOL = new PublicKey("So11111111111111111111111111111111111111112");

export const BUY_BUFFER = Buffer.from([ 0x66, 0x06, 0x3d, 0x12, 0x01, 0xda, 0xeb, 0xea ]);

export const SELL_BUFFER = Buffer.from([ 0x33, 0xe6, 0x85, 0xa4, 0x01, 0x7f, 0x83, 0xad ]);
