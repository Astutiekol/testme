use anchor_lang::prelude::*;
use crate::state::*;
use crate::errors::*;

#[derive(Accounts)]
pub struct MintSBT<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    
    #[account(
        init,
        payer = user,
        space = 8 + std::mem::size_of::<SoulboundToken>()
    )]
    pub sbt: Account<'info, SoulboundToken>,
    
    #[account(
        init_if_needed,
        payer = user,
        space = 8 + std::mem::size_of::<UserProfile>()
    )]
    pub user_profile: Account<'info, UserProfile>,
    
    pub system_program: Program<'info, System>,
}

pub fn mint_sbt(ctx: Context<MintSBT>, tier: u8) -> Result<()> {
    require!(tier >= 1 && tier <= 5, LotteryError::InvalidTier);

    let sbt = &mut ctx.accounts.sbt;
    let user_profile = &mut ctx.accounts.user_profile;
    let clock = Clock::get()?;

    sbt.owner = ctx.accounts.user.key();
    sbt.tier = tier;
    sbt.mint_time = clock.unix_timestamp;
    sbt.metadata_uri = format!("https://api.lottery.com/metadata/sbt/tier{}", tier);

    user_profile.sbt_tier = tier;

    Ok(())
}
