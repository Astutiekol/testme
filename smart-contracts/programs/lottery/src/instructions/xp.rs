use anchor_lang::prelude::*;
use crate::state::*;
use crate::errors::*;

#[derive(Accounts)]
pub struct AddXP<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    
    #[account(
        mut,
        constraint = user_profile.owner == user.key()
    )]
    pub user_profile: Account<'info, UserProfile>,
}

pub fn add_xp(ctx: Context<AddXP>, amount: u64) -> Result<()> {
    let user_profile = &mut ctx.accounts.user_profile;

    user_profile.xp += amount;

    // Check for tier upgrade eligibility
    let new_tier = match user_profile.xp {
        xp if xp >= 10000 => 5,
        xp if xp >= 5000 => 4,
        xp if xp >= 2500 => 3,
        xp if xp >= 1000 => 2,
        xp if xp >= 250 => 1,
        _ => user_profile.sbt_tier,
    };

    if new_tier > user_profile.sbt_tier {
        user_profile.sbt_tier = new_tier;
    }

    Ok(())
}
