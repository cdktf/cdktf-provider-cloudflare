/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}
  */
  readonly accountId?: string;
  /**
  * When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}
  */
  readonly allowAuthenticateViaWarp?: boolean | cdktf.IResolvable;
  /**
  * The unique subdomain assigned to your Zero Trust organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}
  */
  readonly authDomain?: string;
  /**
  * When set to `true`, users skip the identity provider selection step during login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}
  */
  readonly customPages?: ZeroTrustOrganizationCustomPages;
  /**
  * Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this account when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}
  */
  readonly isUiReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}
  */
  readonly loginDesign?: ZeroTrustOrganizationLoginDesign;
  /**
  * The name of your Zero Trust organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}
  */
  readonly name?: string;
  /**
  * The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * A description of the reason why the UI read only field is being toggled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}
  */
  readonly uiReadOnlyToggleReason?: string;
  /**
  * The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}
  */
  readonly userSeatExpirationInactiveTime?: string;
  /**
  * The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}
  */
  readonly warpAuthSessionDuration?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}
  */
  readonly zoneId?: string;
}
export interface ZeroTrustOrganizationCustomPages {
  /**
  * The uid of the custom page to use when a user is denied access after failing a non-identity rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}
  */
  readonly forbidden?: string;
  /**
  * The uid of the custom page to use when a user is denied access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}
  */
  readonly identityDenied?: string;
}

export function zeroTrustOrganizationCustomPagesToTerraform(struct?: ZeroTrustOrganizationCustomPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbidden: cdktf.stringToTerraform(struct!.forbidden),
    identity_denied: cdktf.stringToTerraform(struct!.identityDenied),
  }
}


export function zeroTrustOrganizationCustomPagesToHclTerraform(struct?: ZeroTrustOrganizationCustomPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbidden: {
      value: cdktf.stringToHclTerraform(struct!.forbidden),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_denied: {
      value: cdktf.stringToHclTerraform(struct!.identityDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustOrganizationCustomPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustOrganizationCustomPages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidden = this._forbidden;
    }
    if (this._identityDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityDenied = this._identityDenied;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustOrganizationCustomPages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forbidden = undefined;
      this._identityDenied = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forbidden = value.forbidden;
      this._identityDenied = value.identityDenied;
    }
  }

  // forbidden - computed: false, optional: true, required: false
  private _forbidden?: string; 
  public get forbidden() {
    return this.getStringAttribute('forbidden');
  }
  public set forbidden(value: string) {
    this._forbidden = value;
  }
  public resetForbidden() {
    this._forbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenInput() {
    return this._forbidden;
  }

  // identity_denied - computed: false, optional: true, required: false
  private _identityDenied?: string; 
  public get identityDenied() {
    return this.getStringAttribute('identity_denied');
  }
  public set identityDenied(value: string) {
    this._identityDenied = value;
  }
  public resetIdentityDenied() {
    this._identityDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDeniedInput() {
    return this._identityDenied;
  }
}
export interface ZeroTrustOrganizationLoginDesign {
  /**
  * The background color on your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The text at the bottom of your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}
  */
  readonly footerText?: string;
  /**
  * The text at the top of your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}
  */
  readonly headerText?: string;
  /**
  * The URL of the logo on your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}
  */
  readonly logoPath?: string;
  /**
  * The text color on your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}
  */
  readonly textColor?: string;
}

export function zeroTrustOrganizationLoginDesignToTerraform(struct?: ZeroTrustOrganizationLoginDesign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    footer_text: cdktf.stringToTerraform(struct!.footerText),
    header_text: cdktf.stringToTerraform(struct!.headerText),
    logo_path: cdktf.stringToTerraform(struct!.logoPath),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function zeroTrustOrganizationLoginDesignToHclTerraform(struct?: ZeroTrustOrganizationLoginDesign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer_text: {
      value: cdktf.stringToHclTerraform(struct!.footerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_text: {
      value: cdktf.stringToHclTerraform(struct!.headerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_path: {
      value: cdktf.stringToHclTerraform(struct!.logoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustOrganizationLoginDesign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._footerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerText = this._footerText;
    }
    if (this._headerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerText = this._headerText;
    }
    if (this._logoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPath = this._logoPath;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustOrganizationLoginDesign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._footerText = undefined;
      this._headerText = undefined;
      this._logoPath = undefined;
      this._textColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._footerText = value.footerText;
      this._headerText = value.headerText;
      this._logoPath = value.logoPath;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // footer_text - computed: false, optional: true, required: false
  private _footerText?: string; 
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }
  public set footerText(value: string) {
    this._footerText = value;
  }
  public resetFooterText() {
    this._footerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText;
  }

  // header_text - computed: false, optional: true, required: false
  private _headerText?: string; 
  public get headerText() {
    return this.getStringAttribute('header_text');
  }
  public set headerText(value: string) {
    this._headerText = value;
  }
  public resetHeaderText() {
    this._headerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTextInput() {
    return this._headerText;
  }

  // logo_path - computed: false, optional: true, required: false
  private _logoPath?: string; 
  public get logoPath() {
    return this.getStringAttribute('logo_path');
  }
  public set logoPath(value: string) {
    this._logoPath = value;
  }
  public resetLogoPath() {
    this._logoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoPathInput() {
    return this._logoPath;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export class ZeroTrustOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustOrganization to import
  * @param importFromId The id of the existing ZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_organization',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.12.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._allowAuthenticateViaWarp = config.allowAuthenticateViaWarp;
    this._authDomain = config.authDomain;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._customPages.internalValue = config.customPages;
    this._isUiReadOnly = config.isUiReadOnly;
    this._loginDesign.internalValue = config.loginDesign;
    this._name = config.name;
    this._sessionDuration = config.sessionDuration;
    this._uiReadOnlyToggleReason = config.uiReadOnlyToggleReason;
    this._userSeatExpirationInactiveTime = config.userSeatExpirationInactiveTime;
    this._warpAuthSessionDuration = config.warpAuthSessionDuration;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allow_authenticate_via_warp - computed: true, optional: true, required: false
  private _allowAuthenticateViaWarp?: boolean | cdktf.IResolvable; 
  public get allowAuthenticateViaWarp() {
    return this.getBooleanAttribute('allow_authenticate_via_warp');
  }
  public set allowAuthenticateViaWarp(value: boolean | cdktf.IResolvable) {
    this._allowAuthenticateViaWarp = value;
  }
  public resetAllowAuthenticateViaWarp() {
    this._allowAuthenticateViaWarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticateViaWarpInput() {
    return this._allowAuthenticateViaWarp;
  }

  // auth_domain - computed: false, optional: true, required: false
  private _authDomain?: string; 
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }
  public set authDomain(value: string) {
    this._authDomain = value;
  }
  public resetAuthDomain() {
    this._authDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainInput() {
    return this._authDomain;
  }

  // auto_redirect_to_identity - computed: true, optional: true, required: false
  private _autoRedirectToIdentity?: boolean | cdktf.IResolvable; 
  public get autoRedirectToIdentity() {
    return this.getBooleanAttribute('auto_redirect_to_identity');
  }
  public set autoRedirectToIdentity(value: boolean | cdktf.IResolvable) {
    this._autoRedirectToIdentity = value;
  }
  public resetAutoRedirectToIdentity() {
    this._autoRedirectToIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectToIdentityInput() {
    return this._autoRedirectToIdentity;
  }

  // custom_pages - computed: false, optional: true, required: false
  private _customPages = new ZeroTrustOrganizationCustomPagesOutputReference(this, "custom_pages");
  public get customPages() {
    return this._customPages;
  }
  public putCustomPages(value: ZeroTrustOrganizationCustomPages) {
    this._customPages.internalValue = value;
  }
  public resetCustomPages() {
    this._customPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPagesInput() {
    return this._customPages.internalValue;
  }

  // is_ui_read_only - computed: true, optional: true, required: false
  private _isUiReadOnly?: boolean | cdktf.IResolvable; 
  public get isUiReadOnly() {
    return this.getBooleanAttribute('is_ui_read_only');
  }
  public set isUiReadOnly(value: boolean | cdktf.IResolvable) {
    this._isUiReadOnly = value;
  }
  public resetIsUiReadOnly() {
    this._isUiReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUiReadOnlyInput() {
    return this._isUiReadOnly;
  }

  // login_design - computed: false, optional: true, required: false
  private _loginDesign = new ZeroTrustOrganizationLoginDesignOutputReference(this, "login_design");
  public get loginDesign() {
    return this._loginDesign;
  }
  public putLoginDesign(value: ZeroTrustOrganizationLoginDesign) {
    this._loginDesign.internalValue = value;
  }
  public resetLoginDesign() {
    this._loginDesign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginDesignInput() {
    return this._loginDesign.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // ui_read_only_toggle_reason - computed: false, optional: true, required: false
  private _uiReadOnlyToggleReason?: string; 
  public get uiReadOnlyToggleReason() {
    return this.getStringAttribute('ui_read_only_toggle_reason');
  }
  public set uiReadOnlyToggleReason(value: string) {
    this._uiReadOnlyToggleReason = value;
  }
  public resetUiReadOnlyToggleReason() {
    this._uiReadOnlyToggleReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiReadOnlyToggleReasonInput() {
    return this._uiReadOnlyToggleReason;
  }

  // user_seat_expiration_inactive_time - computed: false, optional: true, required: false
  private _userSeatExpirationInactiveTime?: string; 
  public get userSeatExpirationInactiveTime() {
    return this.getStringAttribute('user_seat_expiration_inactive_time');
  }
  public set userSeatExpirationInactiveTime(value: string) {
    this._userSeatExpirationInactiveTime = value;
  }
  public resetUserSeatExpirationInactiveTime() {
    this._userSeatExpirationInactiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSeatExpirationInactiveTimeInput() {
    return this._userSeatExpirationInactiveTime;
  }

  // warp_auth_session_duration - computed: false, optional: true, required: false
  private _warpAuthSessionDuration?: string; 
  public get warpAuthSessionDuration() {
    return this.getStringAttribute('warp_auth_session_duration');
  }
  public set warpAuthSessionDuration(value: string) {
    this._warpAuthSessionDuration = value;
  }
  public resetWarpAuthSessionDuration() {
    this._warpAuthSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warpAuthSessionDurationInput() {
    return this._warpAuthSessionDuration;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allow_authenticate_via_warp: cdktf.booleanToTerraform(this._allowAuthenticateViaWarp),
      auth_domain: cdktf.stringToTerraform(this._authDomain),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      custom_pages: zeroTrustOrganizationCustomPagesToTerraform(this._customPages.internalValue),
      is_ui_read_only: cdktf.booleanToTerraform(this._isUiReadOnly),
      login_design: zeroTrustOrganizationLoginDesignToTerraform(this._loginDesign.internalValue),
      name: cdktf.stringToTerraform(this._name),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      ui_read_only_toggle_reason: cdktf.stringToTerraform(this._uiReadOnlyToggleReason),
      user_seat_expiration_inactive_time: cdktf.stringToTerraform(this._userSeatExpirationInactiveTime),
      warp_auth_session_duration: cdktf.stringToTerraform(this._warpAuthSessionDuration),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_authenticate_via_warp: {
        value: cdktf.booleanToHclTerraform(this._allowAuthenticateViaWarp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_domain: {
        value: cdktf.stringToHclTerraform(this._authDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_redirect_to_identity: {
        value: cdktf.booleanToHclTerraform(this._autoRedirectToIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_pages: {
        value: zeroTrustOrganizationCustomPagesToHclTerraform(this._customPages.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustOrganizationCustomPages",
      },
      is_ui_read_only: {
        value: cdktf.booleanToHclTerraform(this._isUiReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_design: {
        value: zeroTrustOrganizationLoginDesignToHclTerraform(this._loginDesign.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustOrganizationLoginDesign",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_read_only_toggle_reason: {
        value: cdktf.stringToHclTerraform(this._uiReadOnlyToggleReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_seat_expiration_inactive_time: {
        value: cdktf.stringToHclTerraform(this._userSeatExpirationInactiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warp_auth_session_duration: {
        value: cdktf.stringToHclTerraform(this._warpAuthSessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
