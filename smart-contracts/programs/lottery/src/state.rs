use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq)]
pub enum PoolType {
    Regular,
    Executive,
}

#[account]
pub struct LotteryPool {
    pub pool_type: PoolType,
    pub entry_fee_sol: u64,
    pub entry_fee_token: u64,
    pub total_entries: u32,
    pub total_amount_sol: u64,
    pub total_amount_token: u64,
    pub start_time: i64,
    pub end_time: i64,
    pub winner: Option<Pubkey>,
    pub is_completed: bool,
}

#[account]
pub struct UserProfile {
    pub sbt_tier: u8,
    pub xp: u64,
    pub total_entries: u32,
    pub wins: u32,
    pub last_entry_time: i64,
}

#[account]
pub struct SoulboundToken {
    pub owner: Pubkey,
    pub tier: u8,
    pub mint_time: i64,
    pub metadata_uri: String,
}
