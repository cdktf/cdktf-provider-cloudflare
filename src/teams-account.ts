// https://www.terraform.io/docs/providers/cloudflare/r/teams_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#account_id TeamsAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}
  */
  readonly activityLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#id TeamsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}
  */
  readonly tlsDecryptEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}
  */
  readonly urlBrowserIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * antivirus block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#antivirus TeamsAccount#antivirus}
  */
  readonly antivirus?: TeamsAccountAntivirus;
  /**
  * block_page block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#block_page TeamsAccount#block_page}
  */
  readonly blockPage?: TeamsAccountBlockPage;
  /**
  * fips block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#fips TeamsAccount#fips}
  */
  readonly fips?: TeamsAccountFips;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#logging TeamsAccount#logging}
  */
  readonly logging?: TeamsAccountLogging;
  /**
  * proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#proxy TeamsAccount#proxy}
  */
  readonly proxy?: TeamsAccountProxy;
}
export interface TeamsAccountAntivirus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}
  */
  readonly enabledDownloadPhase: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}
  */
  readonly enabledUploadPhase: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#fail_closed TeamsAccount#fail_closed}
  */
  readonly failClosed: boolean | cdktf.IResolvable;
}

export function teamsAccountAntivirusToTerraform(struct?: TeamsAccountAntivirusOutputReference | TeamsAccountAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_download_phase: cdktf.booleanToTerraform(struct!.enabledDownloadPhase),
    enabled_upload_phase: cdktf.booleanToTerraform(struct!.enabledUploadPhase),
    fail_closed: cdktf.booleanToTerraform(struct!.failClosed),
  }
}

export class TeamsAccountAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountAntivirus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledDownloadPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledDownloadPhase = this._enabledDownloadPhase;
    }
    if (this._enabledUploadPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledUploadPhase = this._enabledUploadPhase;
    }
    if (this._failClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.failClosed = this._failClosed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountAntivirus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledDownloadPhase = undefined;
      this._enabledUploadPhase = undefined;
      this._failClosed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledDownloadPhase = value.enabledDownloadPhase;
      this._enabledUploadPhase = value.enabledUploadPhase;
      this._failClosed = value.failClosed;
    }
  }

  // enabled_download_phase - computed: false, optional: false, required: true
  private _enabledDownloadPhase?: boolean | cdktf.IResolvable; 
  public get enabledDownloadPhase() {
    return this.getBooleanAttribute('enabled_download_phase');
  }
  public set enabledDownloadPhase(value: boolean | cdktf.IResolvable) {
    this._enabledDownloadPhase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDownloadPhaseInput() {
    return this._enabledDownloadPhase;
  }

  // enabled_upload_phase - computed: false, optional: false, required: true
  private _enabledUploadPhase?: boolean | cdktf.IResolvable; 
  public get enabledUploadPhase() {
    return this.getBooleanAttribute('enabled_upload_phase');
  }
  public set enabledUploadPhase(value: boolean | cdktf.IResolvable) {
    this._enabledUploadPhase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledUploadPhaseInput() {
    return this._enabledUploadPhase;
  }

  // fail_closed - computed: false, optional: false, required: true
  private _failClosed?: boolean | cdktf.IResolvable; 
  public get failClosed() {
    return this.getBooleanAttribute('fail_closed');
  }
  public set failClosed(value: boolean | cdktf.IResolvable) {
    this._failClosed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failClosedInput() {
    return this._failClosed;
  }
}
export interface TeamsAccountBlockPage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#background_color TeamsAccount#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#enabled TeamsAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#footer_text TeamsAccount#footer_text}
  */
  readonly footerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#header_text TeamsAccount#header_text}
  */
  readonly headerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#logo_path TeamsAccount#logo_path}
  */
  readonly logoPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#name TeamsAccount#name}
  */
  readonly name?: string;
}

export function teamsAccountBlockPageToTerraform(struct?: TeamsAccountBlockPageOutputReference | TeamsAccountBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    footer_text: cdktf.stringToTerraform(struct!.footerText),
    header_text: cdktf.stringToTerraform(struct!.headerText),
    logo_path: cdktf.stringToTerraform(struct!.logoPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class TeamsAccountBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountBlockPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountBlockPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._enabled = undefined;
      this._footerText = undefined;
      this._headerText = undefined;
      this._logoPath = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._enabled = value.enabled;
      this._footerText = value.footerText;
      this._headerText = value.headerText;
      this._logoPath = value.logoPath;
      this._name = value.name;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
}
export interface TeamsAccountFips {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#tls TeamsAccount#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function teamsAccountFipsToTerraform(struct?: TeamsAccountFipsOutputReference | TeamsAccountFips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}

export class TeamsAccountFipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountFips | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountFips | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}
export interface TeamsAccountLoggingSettingsByRuleTypeDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_all TeamsAccount#log_all}
  */
  readonly logAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}
  */
  readonly logBlocks: boolean | cdktf.IResolvable;
}

export function teamsAccountLoggingSettingsByRuleTypeDnsToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference | TeamsAccountLoggingSettingsByRuleTypeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}

export class TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleTypeDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleTypeDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: false, optional: false, required: true
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: false, optional: false, required: true
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface TeamsAccountLoggingSettingsByRuleTypeHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_all TeamsAccount#log_all}
  */
  readonly logAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}
  */
  readonly logBlocks: boolean | cdktf.IResolvable;
}

export function teamsAccountLoggingSettingsByRuleTypeHttpToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference | TeamsAccountLoggingSettingsByRuleTypeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}

export class TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleTypeHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleTypeHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: false, optional: false, required: true
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: false, optional: false, required: true
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface TeamsAccountLoggingSettingsByRuleTypeL4 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_all TeamsAccount#log_all}
  */
  readonly logAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}
  */
  readonly logBlocks: boolean | cdktf.IResolvable;
}

export function teamsAccountLoggingSettingsByRuleTypeL4ToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeL4OutputReference | TeamsAccountLoggingSettingsByRuleTypeL4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}

export class TeamsAccountLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleTypeL4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleTypeL4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: false, optional: false, required: true
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: false, optional: false, required: true
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface TeamsAccountLoggingSettingsByRuleType {
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#dns TeamsAccount#dns}
  */
  readonly dns: TeamsAccountLoggingSettingsByRuleTypeDns;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#http TeamsAccount#http}
  */
  readonly http: TeamsAccountLoggingSettingsByRuleTypeHttp;
  /**
  * l4 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#l4 TeamsAccount#l4}
  */
  readonly l4: TeamsAccountLoggingSettingsByRuleTypeL4;
}

export function teamsAccountLoggingSettingsByRuleTypeToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeOutputReference | TeamsAccountLoggingSettingsByRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: teamsAccountLoggingSettingsByRuleTypeDnsToTerraform(struct!.dns),
    http: teamsAccountLoggingSettingsByRuleTypeHttpToTerraform(struct!.http),
    l4: teamsAccountLoggingSettingsByRuleTypeL4ToTerraform(struct!.l4),
  }
}

export class TeamsAccountLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._l4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4 = this._l4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._l4.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._l4.internalValue = value.l4;
    }
  }

  // dns - computed: false, optional: false, required: true
  private _dns = new TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: TeamsAccountLoggingSettingsByRuleTypeDns) {
    this._dns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: false, required: true
  private _http = new TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: TeamsAccountLoggingSettingsByRuleTypeHttp) {
    this._http.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // l4 - computed: false, optional: false, required: true
  private _l4 = new TeamsAccountLoggingSettingsByRuleTypeL4OutputReference(this, "l4");
  public get l4() {
    return this._l4;
  }
  public putL4(value: TeamsAccountLoggingSettingsByRuleTypeL4) {
    this._l4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Input() {
    return this._l4.internalValue;
  }
}
export interface TeamsAccountLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#redact_pii TeamsAccount#redact_pii}
  */
  readonly redactPii: boolean | cdktf.IResolvable;
  /**
  * settings_by_rule_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}
  */
  readonly settingsByRuleType: TeamsAccountLoggingSettingsByRuleType;
}

export function teamsAccountLoggingToTerraform(struct?: TeamsAccountLoggingOutputReference | TeamsAccountLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redact_pii: cdktf.booleanToTerraform(struct!.redactPii),
    settings_by_rule_type: teamsAccountLoggingSettingsByRuleTypeToTerraform(struct!.settingsByRuleType),
  }
}

export class TeamsAccountLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redactPii !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactPii = this._redactPii;
    }
    if (this._settingsByRuleType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsByRuleType = this._settingsByRuleType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redactPii = undefined;
      this._settingsByRuleType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redactPii = value.redactPii;
      this._settingsByRuleType.internalValue = value.settingsByRuleType;
    }
  }

  // redact_pii - computed: false, optional: false, required: true
  private _redactPii?: boolean | cdktf.IResolvable; 
  public get redactPii() {
    return this.getBooleanAttribute('redact_pii');
  }
  public set redactPii(value: boolean | cdktf.IResolvable) {
    this._redactPii = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redactPiiInput() {
    return this._redactPii;
  }

  // settings_by_rule_type - computed: false, optional: false, required: true
  private _settingsByRuleType = new TeamsAccountLoggingSettingsByRuleTypeOutputReference(this, "settings_by_rule_type");
  public get settingsByRuleType() {
    return this._settingsByRuleType;
  }
  public putSettingsByRuleType(value: TeamsAccountLoggingSettingsByRuleType) {
    this._settingsByRuleType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsByRuleTypeInput() {
    return this._settingsByRuleType.internalValue;
  }
}
export interface TeamsAccountProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#tcp TeamsAccount#tcp}
  */
  readonly tcp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#udp TeamsAccount#udp}
  */
  readonly udp: boolean | cdktf.IResolvable;
}

export function teamsAccountProxyToTerraform(struct?: TeamsAccountProxyOutputReference | TeamsAccountProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp: cdktf.booleanToTerraform(struct!.tcp),
    udp: cdktf.booleanToTerraform(struct!.udp),
  }
}

export class TeamsAccountProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // tcp - computed: false, optional: false, required: true
  private _tcp?: boolean | cdktf.IResolvable; 
  public get tcp() {
    return this.getBooleanAttribute('tcp');
  }
  public set tcp(value: boolean | cdktf.IResolvable) {
    this._tcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: false, required: true
  private _udp?: boolean | cdktf.IResolvable; 
  public get udp() {
    return this.getBooleanAttribute('udp');
  }
  public set udp(value: boolean | cdktf.IResolvable) {
    this._udp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account cloudflare_teams_account}
*/
export class TeamsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_teams_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account cloudflare_teams_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_teams_account',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._activityLogEnabled = config.activityLogEnabled;
    this._id = config.id;
    this._tlsDecryptEnabled = config.tlsDecryptEnabled;
    this._urlBrowserIsolationEnabled = config.urlBrowserIsolationEnabled;
    this._antivirus.internalValue = config.antivirus;
    this._blockPage.internalValue = config.blockPage;
    this._fips.internalValue = config.fips;
    this._logging.internalValue = config.logging;
    this._proxy.internalValue = config.proxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // activity_log_enabled - computed: false, optional: true, required: false
  private _activityLogEnabled?: boolean | cdktf.IResolvable; 
  public get activityLogEnabled() {
    return this.getBooleanAttribute('activity_log_enabled');
  }
  public set activityLogEnabled(value: boolean | cdktf.IResolvable) {
    this._activityLogEnabled = value;
  }
  public resetActivityLogEnabled() {
    this._activityLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityLogEnabledInput() {
    return this._activityLogEnabled;
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

  // tls_decrypt_enabled - computed: false, optional: true, required: false
  private _tlsDecryptEnabled?: boolean | cdktf.IResolvable; 
  public get tlsDecryptEnabled() {
    return this.getBooleanAttribute('tls_decrypt_enabled');
  }
  public set tlsDecryptEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsDecryptEnabled = value;
  }
  public resetTlsDecryptEnabled() {
    this._tlsDecryptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDecryptEnabledInput() {
    return this._tlsDecryptEnabled;
  }

  // url_browser_isolation_enabled - computed: false, optional: true, required: false
  private _urlBrowserIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get urlBrowserIsolationEnabled() {
    return this.getBooleanAttribute('url_browser_isolation_enabled');
  }
  public set urlBrowserIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._urlBrowserIsolationEnabled = value;
  }
  public resetUrlBrowserIsolationEnabled() {
    this._urlBrowserIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBrowserIsolationEnabledInput() {
    return this._urlBrowserIsolationEnabled;
  }

  // antivirus - computed: false, optional: true, required: false
  private _antivirus = new TeamsAccountAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }
  public putAntivirus(value: TeamsAccountAntivirus) {
    this._antivirus.internalValue = value;
  }
  public resetAntivirus() {
    this._antivirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus.internalValue;
  }

  // block_page - computed: false, optional: true, required: false
  private _blockPage = new TeamsAccountBlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }
  public putBlockPage(value: TeamsAccountBlockPage) {
    this._blockPage.internalValue = value;
  }
  public resetBlockPage() {
    this._blockPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageInput() {
    return this._blockPage.internalValue;
  }

  // fips - computed: false, optional: true, required: false
  private _fips = new TeamsAccountFipsOutputReference(this, "fips");
  public get fips() {
    return this._fips;
  }
  public putFips(value: TeamsAccountFips) {
    this._fips.internalValue = value;
  }
  public resetFips() {
    this._fips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsInput() {
    return this._fips.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new TeamsAccountLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: TeamsAccountLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new TeamsAccountProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: TeamsAccountProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      activity_log_enabled: cdktf.booleanToTerraform(this._activityLogEnabled),
      id: cdktf.stringToTerraform(this._id),
      tls_decrypt_enabled: cdktf.booleanToTerraform(this._tlsDecryptEnabled),
      url_browser_isolation_enabled: cdktf.booleanToTerraform(this._urlBrowserIsolationEnabled),
      antivirus: teamsAccountAntivirusToTerraform(this._antivirus.internalValue),
      block_page: teamsAccountBlockPageToTerraform(this._blockPage.internalValue),
      fips: teamsAccountFipsToTerraform(this._fips.internalValue),
      logging: teamsAccountLoggingToTerraform(this._logging.internalValue),
      proxy: teamsAccountProxyToTerraform(this._proxy.internalValue),
    };
  }
}
