// https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#account_id AccessOrganization#account_id}
  */
  readonly accountId?: string;
  /**
  * The unique subdomain assigned to your Zero Trust organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#auth_domain AccessOrganization#auth_domain}
  */
  readonly authDomain: string;
  /**
  * When set to true, users skip the identity provider selection step during login.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#auto_redirect_to_identity AccessOrganization#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#id AccessOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#is_ui_read_only AccessOrganization#is_ui_read_only}
  */
  readonly isUiReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of your Zero Trust organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#name AccessOrganization#name}
  */
  readonly name?: string;
  /**
  * A description of the reason why the UI read only field is being toggled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#ui_read_only_toggle_reason AccessOrganization#ui_read_only_toggle_reason}
  */
  readonly uiReadOnlyToggleReason?: string;
  /**
  * The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#user_seat_expiration_inactive_time AccessOrganization#user_seat_expiration_inactive_time}
  */
  readonly userSeatExpirationInactiveTime?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#zone_id AccessOrganization#zone_id}
  */
  readonly zoneId?: string;
  /**
  * login_design block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#login_design AccessOrganization#login_design}
  */
  readonly loginDesign?: AccessOrganizationLoginDesign[] | cdktf.IResolvable;
}
export interface AccessOrganizationLoginDesign {
  /**
  * The background color on the login page.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#background_color AccessOrganization#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The text at the bottom of the login page.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#footer_text AccessOrganization#footer_text}
  */
  readonly footerText?: string;
  /**
  * The text at the top of the login page.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#header_text AccessOrganization#header_text}
  */
  readonly headerText?: string;
  /**
  * The URL of the logo on the login page.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#logo_path AccessOrganization#logo_path}
  */
  readonly logoPath?: string;
  /**
  * The text color on the login page.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization#text_color AccessOrganization#text_color}
  */
  readonly textColor?: string;
}

export function accessOrganizationLoginDesignToTerraform(struct?: AccessOrganizationLoginDesign | cdktf.IResolvable): any {
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

export class AccessOrganizationLoginDesignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AccessOrganizationLoginDesign | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessOrganizationLoginDesign | cdktf.IResolvable | undefined) {
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

export class AccessOrganizationLoginDesignList extends cdktf.ComplexList {
  public internalValue? : AccessOrganizationLoginDesign[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AccessOrganizationLoginDesignOutputReference {
    return new AccessOrganizationLoginDesignOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization cloudflare_access_organization}
*/
export class AccessOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/access_organization cloudflare_access_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: AccessOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_organization',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.10.0',
        providerVersionConstraint: '~> 4.3'
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
    this._authDomain = config.authDomain;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._id = config.id;
    this._isUiReadOnly = config.isUiReadOnly;
    this._name = config.name;
    this._uiReadOnlyToggleReason = config.uiReadOnlyToggleReason;
    this._userSeatExpirationInactiveTime = config.userSeatExpirationInactiveTime;
    this._zoneId = config.zoneId;
    this._loginDesign.internalValue = config.loginDesign;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // auth_domain - computed: false, optional: false, required: true
  private _authDomain?: string; 
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }
  public set authDomain(value: string) {
    this._authDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainInput() {
    return this._authDomain;
  }

  // auto_redirect_to_identity - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_ui_read_only - computed: false, optional: true, required: false
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

  // zone_id - computed: true, optional: true, required: false
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

  // login_design - computed: false, optional: true, required: false
  private _loginDesign = new AccessOrganizationLoginDesignList(this, "login_design", false);
  public get loginDesign() {
    return this._loginDesign;
  }
  public putLoginDesign(value: AccessOrganizationLoginDesign[] | cdktf.IResolvable) {
    this._loginDesign.internalValue = value;
  }
  public resetLoginDesign() {
    this._loginDesign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginDesignInput() {
    return this._loginDesign.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auth_domain: cdktf.stringToTerraform(this._authDomain),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      id: cdktf.stringToTerraform(this._id),
      is_ui_read_only: cdktf.booleanToTerraform(this._isUiReadOnly),
      name: cdktf.stringToTerraform(this._name),
      ui_read_only_toggle_reason: cdktf.stringToTerraform(this._uiReadOnlyToggleReason),
      user_seat_expiration_inactive_time: cdktf.stringToTerraform(this._userSeatExpirationInactiveTime),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      login_design: cdktf.listMapper(accessOrganizationLoginDesignToTerraform, true)(this._loginDesign.internalValue),
    };
  }
}
