use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount};

mod state;
mod instructions;
mod errors;

declare_id!("Lottery11111111111111111111111111111111111111");

#[program]
pub mod solana_lottery {
    use super::*;

    // Minting SBT
    pub fn mint_sbt(ctx: Context<MintSBT>, tier: u8) -> Result<()> {
        instructions::sbt::mint_sbt(ctx, tier)
    }

    // Adding XP
    pub fn add_xp(ctx: Context<AddXP>, amount: u64) -> Result<()> {
        instructions::xp::add_xp(ctx, amount)
    }
}
