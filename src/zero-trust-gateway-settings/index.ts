// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustGatewaySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}
  */
  readonly accountId: string;
  /**
  * Account settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#settings ZeroTrustGatewaySettings#settings}
  */
  readonly settings?: ZeroTrustGatewaySettingsSettings;
}
export interface ZeroTrustGatewaySettingsSettingsActivityLog {
  /**
  * Enable activity logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct?: ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsActivityLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsActivityLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings {
  /**
  * Set notification on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Customize the message shown in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#msg ZeroTrustGatewaySettings#msg}
  */
  readonly msg?: string;
  /**
  * Optional URL to direct users to additional information. If not set, the notification will open a block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}
  */
  readonly supportUrl?: string;
}

export function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    msg: cdktf.stringToTerraform(struct!.msg),
    support_url: cdktf.stringToTerraform(struct!.supportUrl),
  }
}


export function zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    msg: {
      value: cdktf.stringToHclTerraform(struct!.msg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_url: {
      value: cdktf.stringToHclTerraform(struct!.supportUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._msg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msg = this._msg;
    }
    if (this._supportUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportUrl = this._supportUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._msg = undefined;
      this._supportUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._msg = value.msg;
      this._supportUrl = value.supportUrl;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // msg - computed: true, optional: true, required: false
  private _msg?: string; 
  public get msg() {
    return this.getStringAttribute('msg');
  }
  public set msg(value: string) {
    this._msg = value;
  }
  public resetMsg() {
    this._msg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg;
  }

  // support_url - computed: true, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }
}
export interface ZeroTrustGatewaySettingsSettingsAntivirus {
  /**
  * Enable anti-virus scanning on downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}
  */
  readonly enabledDownloadPhase?: boolean | cdktf.IResolvable;
  /**
  * Enable anti-virus scanning on uploads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}
  */
  readonly enabledUploadPhase?: boolean | cdktf.IResolvable;
  /**
  * Block requests for files that cannot be scanned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}
  */
  readonly failClosed?: boolean | cdktf.IResolvable;
  /**
  * Configure a message to display on the user's device when an antivirus search is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}
  */
  readonly notificationSettings?: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings;
}

export function zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_download_phase: cdktf.booleanToTerraform(struct!.enabledDownloadPhase),
    enabled_upload_phase: cdktf.booleanToTerraform(struct!.enabledUploadPhase),
    fail_closed: cdktf.booleanToTerraform(struct!.failClosed),
    notification_settings: zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct!.notificationSettings),
  }
}


export function zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_download_phase: {
      value: cdktf.booleanToHclTerraform(struct!.enabledDownloadPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_upload_phase: {
      value: cdktf.booleanToHclTerraform(struct!.enabledUploadPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_closed: {
      value: cdktf.booleanToHclTerraform(struct!.failClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_settings: {
      value: zeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsAntivirus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledDownloadPhase = undefined;
      this._enabledUploadPhase = undefined;
      this._failClosed = undefined;
      this._notificationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledDownloadPhase = value.enabledDownloadPhase;
      this._enabledUploadPhase = value.enabledUploadPhase;
      this._failClosed = value.failClosed;
      this._notificationSettings.internalValue = value.notificationSettings;
    }
  }

  // enabled_download_phase - computed: true, optional: true, required: false
  private _enabledDownloadPhase?: boolean | cdktf.IResolvable; 
  public get enabledDownloadPhase() {
    return this.getBooleanAttribute('enabled_download_phase');
  }
  public set enabledDownloadPhase(value: boolean | cdktf.IResolvable) {
    this._enabledDownloadPhase = value;
  }
  public resetEnabledDownloadPhase() {
    this._enabledDownloadPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDownloadPhaseInput() {
    return this._enabledDownloadPhase;
  }

  // enabled_upload_phase - computed: true, optional: true, required: false
  private _enabledUploadPhase?: boolean | cdktf.IResolvable; 
  public get enabledUploadPhase() {
    return this.getBooleanAttribute('enabled_upload_phase');
  }
  public set enabledUploadPhase(value: boolean | cdktf.IResolvable) {
    this._enabledUploadPhase = value;
  }
  public resetEnabledUploadPhase() {
    this._enabledUploadPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledUploadPhaseInput() {
    return this._enabledUploadPhase;
  }

  // fail_closed - computed: true, optional: true, required: false
  private _failClosed?: boolean | cdktf.IResolvable; 
  public get failClosed() {
    return this.getBooleanAttribute('fail_closed');
  }
  public set failClosed(value: boolean | cdktf.IResolvable) {
    this._failClosed = value;
  }
  public resetFailClosed() {
    this._failClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failClosedInput() {
    return this._failClosed;
  }

  // notification_settings - computed: true, optional: true, required: false
  private _notificationSettings = new ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }
}
export interface ZeroTrustGatewaySettingsSettingsBlockPage {
  /**
  * If mode is customized_block_page: block page background color in #rrggbb format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If mode is customized_block_page: block page footer text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}
  */
  readonly footerText?: string;
  /**
  * If mode is customized_block_page: block page header text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}
  */
  readonly headerText?: string;
  /**
  * If mode is redirect_uri: when enabled, context will be appended to target_uri as query parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#include_context ZeroTrustGatewaySettings#include_context}
  */
  readonly includeContext?: boolean | cdktf.IResolvable;
  /**
  * If mode is customized_block_page: full URL to the logo file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}
  */
  readonly logoPath?: string;
  /**
  * If mode is customized_block_page: admin email for users to contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}
  */
  readonly mailtoAddress?: string;
  /**
  * If mode is customized_block_page: subject line for emails created from block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}
  */
  readonly mailtoSubject?: string;
  /**
  * Controls whether the user is redirected to a Cloudflare-hosted block page or to a customer-provided URI.
  * Available values: "customized_block_page", "redirect_uri".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#mode ZeroTrustGatewaySettings#mode}
  */
  readonly mode?: string;
  /**
  * If mode is customized_block_page: block page title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}
  */
  readonly name?: string;
  /**
  * If mode is customized_block_page: suppress detailed info at the bottom of the block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#suppress_footer ZeroTrustGatewaySettings#suppress_footer}
  */
  readonly suppressFooter?: boolean | cdktf.IResolvable;
  /**
  * If mode is redirect_uri: URI to which the user should be redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#target_uri ZeroTrustGatewaySettings#target_uri}
  */
  readonly targetUri?: string;
}

export function zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct?: ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    footer_text: cdktf.stringToTerraform(struct!.footerText),
    header_text: cdktf.stringToTerraform(struct!.headerText),
    include_context: cdktf.booleanToTerraform(struct!.includeContext),
    logo_path: cdktf.stringToTerraform(struct!.logoPath),
    mailto_address: cdktf.stringToTerraform(struct!.mailtoAddress),
    mailto_subject: cdktf.stringToTerraform(struct!.mailtoSubject),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    suppress_footer: cdktf.booleanToTerraform(struct!.suppressFooter),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    include_context: {
      value: cdktf.booleanToHclTerraform(struct!.includeContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logo_path: {
      value: cdktf.stringToHclTerraform(struct!.logoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailto_address: {
      value: cdktf.stringToHclTerraform(struct!.mailtoAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailto_subject: {
      value: cdktf.stringToHclTerraform(struct!.mailtoSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_footer: {
      value: cdktf.booleanToHclTerraform(struct!.suppressFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._includeContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeContext = this._includeContext;
    }
    if (this._logoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPath = this._logoPath;
    }
    if (this._mailtoAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailtoAddress = this._mailtoAddress;
    }
    if (this._mailtoSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailtoSubject = this._mailtoSubject;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suppressFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressFooter = this._suppressFooter;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsBlockPage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._enabled = undefined;
      this._footerText = undefined;
      this._headerText = undefined;
      this._includeContext = undefined;
      this._logoPath = undefined;
      this._mailtoAddress = undefined;
      this._mailtoSubject = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._suppressFooter = undefined;
      this._targetUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._enabled = value.enabled;
      this._footerText = value.footerText;
      this._headerText = value.headerText;
      this._includeContext = value.includeContext;
      this._logoPath = value.logoPath;
      this._mailtoAddress = value.mailtoAddress;
      this._mailtoSubject = value.mailtoSubject;
      this._mode = value.mode;
      this._name = value.name;
      this._suppressFooter = value.suppressFooter;
      this._targetUri = value.targetUri;
    }
  }

  // background_color - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // footer_text - computed: true, optional: true, required: false
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

  // header_text - computed: true, optional: true, required: false
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

  // include_context - computed: true, optional: true, required: false
  private _includeContext?: boolean | cdktf.IResolvable; 
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }
  public set includeContext(value: boolean | cdktf.IResolvable) {
    this._includeContext = value;
  }
  public resetIncludeContext() {
    this._includeContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeContextInput() {
    return this._includeContext;
  }

  // logo_path - computed: true, optional: true, required: false
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

  // mailto_address - computed: true, optional: true, required: false
  private _mailtoAddress?: string; 
  public get mailtoAddress() {
    return this.getStringAttribute('mailto_address');
  }
  public set mailtoAddress(value: string) {
    this._mailtoAddress = value;
  }
  public resetMailtoAddress() {
    this._mailtoAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailtoAddressInput() {
    return this._mailtoAddress;
  }

  // mailto_subject - computed: true, optional: true, required: false
  private _mailtoSubject?: string; 
  public get mailtoSubject() {
    return this.getStringAttribute('mailto_subject');
  }
  public set mailtoSubject(value: string) {
    this._mailtoSubject = value;
  }
  public resetMailtoSubject() {
    this._mailtoSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailtoSubjectInput() {
    return this._mailtoSubject;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // suppress_footer - computed: true, optional: true, required: false
  private _suppressFooter?: boolean | cdktf.IResolvable; 
  public get suppressFooter() {
    return this.getBooleanAttribute('suppress_footer');
  }
  public set suppressFooter(value: boolean | cdktf.IResolvable) {
    this._suppressFooter = value;
  }
  public resetSuppressFooter() {
    this._suppressFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressFooterInput() {
    return this._suppressFooter;
  }

  // target_uri - computed: true, optional: true, required: false
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  public resetTargetUri() {
    this._targetUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface ZeroTrustGatewaySettingsSettingsBodyScanning {
  /**
  * Set the inspection mode to either `deep` or `shallow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}
  */
  readonly inspectionMode?: string;
}

export function zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct?: ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspection_mode: cdktf.stringToTerraform(struct!.inspectionMode),
  }
}


export function zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspection_mode: {
      value: cdktf.stringToHclTerraform(struct!.inspectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionMode = this._inspectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsBodyScanning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inspectionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inspectionMode = value.inspectionMode;
    }
  }

  // inspection_mode - computed: true, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }
}
export interface ZeroTrustGatewaySettingsSettingsBrowserIsolation {
  /**
  * Enable non-identity onramp support for Browser Isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#non_identity_enabled ZeroTrustGatewaySettings#non_identity_enabled}
  */
  readonly nonIdentityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Clientless Browser Isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}
  */
  readonly urlBrowserIsolationEnabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct?: ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_identity_enabled: cdktf.booleanToTerraform(struct!.nonIdentityEnabled),
    url_browser_isolation_enabled: cdktf.booleanToTerraform(struct!.urlBrowserIsolationEnabled),
  }
}


export function zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_identity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nonIdentityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_browser_isolation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.urlBrowserIsolationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonIdentityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonIdentityEnabled = this._nonIdentityEnabled;
    }
    if (this._urlBrowserIsolationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlBrowserIsolationEnabled = this._urlBrowserIsolationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsBrowserIsolation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonIdentityEnabled = undefined;
      this._urlBrowserIsolationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonIdentityEnabled = value.nonIdentityEnabled;
      this._urlBrowserIsolationEnabled = value.urlBrowserIsolationEnabled;
    }
  }

  // non_identity_enabled - computed: true, optional: true, required: false
  private _nonIdentityEnabled?: boolean | cdktf.IResolvable; 
  public get nonIdentityEnabled() {
    return this.getBooleanAttribute('non_identity_enabled');
  }
  public set nonIdentityEnabled(value: boolean | cdktf.IResolvable) {
    this._nonIdentityEnabled = value;
  }
  public resetNonIdentityEnabled() {
    this._nonIdentityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonIdentityEnabledInput() {
    return this._nonIdentityEnabled;
  }

  // url_browser_isolation_enabled - computed: true, optional: true, required: false
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
}
export interface ZeroTrustGatewaySettingsSettingsCertificate {
  /**
  * UUID of certificate to be used for interception. Certificate must be available (previously called 'active') on the edge. A nil UUID will indicate the Cloudflare Root CA should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct?: ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustGatewaySettingsSettingsCustomCertificate {
  /**
  * Enable use of custom certificate authority for signing Gateway traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * UUID of certificate (ID from MTLS certificate store).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct?: ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsCustomCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._id = value.id;
    }
  }

  // binding_status - computed: true, optional: false, required: false
  public get bindingStatus() {
    return this.getStringAttribute('binding_status');
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface ZeroTrustGatewaySettingsSettingsExtendedEmailMatching {
  /**
  * Enable matching all variants of user emails (with + or . modifiers) used as criteria in Firewall policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct?: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface ZeroTrustGatewaySettingsSettingsFips {
  /**
  * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewaySettingsSettingsFipsToTerraform(struct?: ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsFipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsFips | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tls = value.tls;
    }
  }

  // tls - computed: true, optional: true, required: false
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
export interface ZeroTrustGatewaySettingsSettingsProtocolDetection {
  /**
  * Enable detecting protocol on initial bytes of client traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct?: ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsProtocolDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface ZeroTrustGatewaySettingsSettingsSandbox {
  /**
  * Enable sandbox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Action to take when the file cannot be scanned.
  * Available values: "allow", "block".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#fallback_action ZeroTrustGatewaySettings#fallback_action}
  */
  readonly fallbackAction?: string;
}

export function zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct?: ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fallback_action: cdktf.stringToTerraform(struct!.fallbackAction),
  }
}


export function zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_action: {
      value: cdktf.stringToHclTerraform(struct!.fallbackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsSandboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallbackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackAction = this._fallbackAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsSandbox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._fallbackAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._fallbackAction = value.fallbackAction;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // fallback_action - computed: true, optional: true, required: false
  private _fallbackAction?: string; 
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }
  public set fallbackAction(value: string) {
    this._fallbackAction = value;
  }
  public resetFallbackAction() {
    this._fallbackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackActionInput() {
    return this._fallbackAction;
  }
}
export interface ZeroTrustGatewaySettingsSettingsTlsDecrypt {
  /**
  * Enable inspecting encrypted HTTP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct?: ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct?: ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettingsTlsDecrypt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface ZeroTrustGatewaySettingsSettings {
  /**
  * Activity log settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#activity_log ZeroTrustGatewaySettings#activity_log}
  */
  readonly activityLog?: ZeroTrustGatewaySettingsSettingsActivityLog;
  /**
  * Anti-virus settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}
  */
  readonly antivirus?: ZeroTrustGatewaySettingsSettingsAntivirus;
  /**
  * Block page layout settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}
  */
  readonly blockPage?: ZeroTrustGatewaySettingsSettingsBlockPage;
  /**
  * DLP body scanning settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}
  */
  readonly bodyScanning?: ZeroTrustGatewaySettingsSettingsBodyScanning;
  /**
  * Browser isolation settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#browser_isolation ZeroTrustGatewaySettings#browser_isolation}
  */
  readonly browserIsolation?: ZeroTrustGatewaySettingsSettingsBrowserIsolation;
  /**
  * Certificate settings for Gateway TLS interception. If not specified, the Cloudflare Root CA will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}
  */
  readonly certificate?: ZeroTrustGatewaySettingsSettingsCertificate;
  /**
  * Custom certificate settings for BYO-PKI. (deprecated and replaced by `certificate`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}
  */
  readonly customCertificate?: ZeroTrustGatewaySettingsSettingsCustomCertificate;
  /**
  * Extended e-mail matching settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}
  */
  readonly extendedEmailMatching?: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching;
  /**
  * FIPS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}
  */
  readonly fips?: ZeroTrustGatewaySettingsSettingsFips;
  /**
  * Protocol Detection settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#protocol_detection ZeroTrustGatewaySettings#protocol_detection}
  */
  readonly protocolDetection?: ZeroTrustGatewaySettingsSettingsProtocolDetection;
  /**
  * Sandbox settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#sandbox ZeroTrustGatewaySettings#sandbox}
  */
  readonly sandbox?: ZeroTrustGatewaySettingsSettingsSandbox;
  /**
  * TLS interception settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#tls_decrypt ZeroTrustGatewaySettings#tls_decrypt}
  */
  readonly tlsDecrypt?: ZeroTrustGatewaySettingsSettingsTlsDecrypt;
}

export function zeroTrustGatewaySettingsSettingsToTerraform(struct?: ZeroTrustGatewaySettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_log: zeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct!.activityLog),
    antivirus: zeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct!.antivirus),
    block_page: zeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct!.blockPage),
    body_scanning: zeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct!.bodyScanning),
    browser_isolation: zeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct!.browserIsolation),
    certificate: zeroTrustGatewaySettingsSettingsCertificateToTerraform(struct!.certificate),
    custom_certificate: zeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct!.customCertificate),
    extended_email_matching: zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct!.extendedEmailMatching),
    fips: zeroTrustGatewaySettingsSettingsFipsToTerraform(struct!.fips),
    protocol_detection: zeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct!.protocolDetection),
    sandbox: zeroTrustGatewaySettingsSettingsSandboxToTerraform(struct!.sandbox),
    tls_decrypt: zeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct!.tlsDecrypt),
  }
}


export function zeroTrustGatewaySettingsSettingsToHclTerraform(struct?: ZeroTrustGatewaySettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity_log: {
      value: zeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct!.activityLog),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsActivityLog",
    },
    antivirus: {
      value: zeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct!.antivirus),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsAntivirus",
    },
    block_page: {
      value: zeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct!.blockPage),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsBlockPage",
    },
    body_scanning: {
      value: zeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct!.bodyScanning),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsBodyScanning",
    },
    browser_isolation: {
      value: zeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct!.browserIsolation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsBrowserIsolation",
    },
    certificate: {
      value: zeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsCertificate",
    },
    custom_certificate: {
      value: zeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsCustomCertificate",
    },
    extended_email_matching: {
      value: zeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct!.extendedEmailMatching),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsExtendedEmailMatching",
    },
    fips: {
      value: zeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct!.fips),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsFips",
    },
    protocol_detection: {
      value: zeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct!.protocolDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsProtocolDetection",
    },
    sandbox: {
      value: zeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct!.sandbox),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsSandbox",
    },
    tls_decrypt: {
      value: zeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct!.tlsDecrypt),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustGatewaySettingsSettingsTlsDecrypt",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewaySettingsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustGatewaySettingsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityLog = this._activityLog?.internalValue;
    }
    if (this._antivirus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirus = this._antivirus?.internalValue;
    }
    if (this._blockPage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPage = this._blockPage?.internalValue;
    }
    if (this._bodyScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyScanning = this._bodyScanning?.internalValue;
    }
    if (this._browserIsolation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserIsolation = this._browserIsolation?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._customCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate?.internalValue;
    }
    if (this._extendedEmailMatching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedEmailMatching = this._extendedEmailMatching?.internalValue;
    }
    if (this._fips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fips = this._fips?.internalValue;
    }
    if (this._protocolDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolDetection = this._protocolDetection?.internalValue;
    }
    if (this._sandbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandbox = this._sandbox?.internalValue;
    }
    if (this._tlsDecrypt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsDecrypt = this._tlsDecrypt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewaySettingsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityLog.internalValue = undefined;
      this._antivirus.internalValue = undefined;
      this._blockPage.internalValue = undefined;
      this._bodyScanning.internalValue = undefined;
      this._browserIsolation.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._customCertificate.internalValue = undefined;
      this._extendedEmailMatching.internalValue = undefined;
      this._fips.internalValue = undefined;
      this._protocolDetection.internalValue = undefined;
      this._sandbox.internalValue = undefined;
      this._tlsDecrypt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityLog.internalValue = value.activityLog;
      this._antivirus.internalValue = value.antivirus;
      this._blockPage.internalValue = value.blockPage;
      this._bodyScanning.internalValue = value.bodyScanning;
      this._browserIsolation.internalValue = value.browserIsolation;
      this._certificate.internalValue = value.certificate;
      this._customCertificate.internalValue = value.customCertificate;
      this._extendedEmailMatching.internalValue = value.extendedEmailMatching;
      this._fips.internalValue = value.fips;
      this._protocolDetection.internalValue = value.protocolDetection;
      this._sandbox.internalValue = value.sandbox;
      this._tlsDecrypt.internalValue = value.tlsDecrypt;
    }
  }

  // activity_log - computed: true, optional: true, required: false
  private _activityLog = new ZeroTrustGatewaySettingsSettingsActivityLogOutputReference(this, "activity_log");
  public get activityLog() {
    return this._activityLog;
  }
  public putActivityLog(value: ZeroTrustGatewaySettingsSettingsActivityLog) {
    this._activityLog.internalValue = value;
  }
  public resetActivityLog() {
    this._activityLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityLogInput() {
    return this._activityLog.internalValue;
  }

  // antivirus - computed: true, optional: true, required: false
  private _antivirus = new ZeroTrustGatewaySettingsSettingsAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }
  public putAntivirus(value: ZeroTrustGatewaySettingsSettingsAntivirus) {
    this._antivirus.internalValue = value;
  }
  public resetAntivirus() {
    this._antivirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus.internalValue;
  }

  // block_page - computed: true, optional: true, required: false
  private _blockPage = new ZeroTrustGatewaySettingsSettingsBlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }
  public putBlockPage(value: ZeroTrustGatewaySettingsSettingsBlockPage) {
    this._blockPage.internalValue = value;
  }
  public resetBlockPage() {
    this._blockPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageInput() {
    return this._blockPage.internalValue;
  }

  // body_scanning - computed: true, optional: true, required: false
  private _bodyScanning = new ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(this, "body_scanning");
  public get bodyScanning() {
    return this._bodyScanning;
  }
  public putBodyScanning(value: ZeroTrustGatewaySettingsSettingsBodyScanning) {
    this._bodyScanning.internalValue = value;
  }
  public resetBodyScanning() {
    this._bodyScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyScanningInput() {
    return this._bodyScanning.internalValue;
  }

  // browser_isolation - computed: true, optional: true, required: false
  private _browserIsolation = new ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(this, "browser_isolation");
  public get browserIsolation() {
    return this._browserIsolation;
  }
  public putBrowserIsolation(value: ZeroTrustGatewaySettingsSettingsBrowserIsolation) {
    this._browserIsolation.internalValue = value;
  }
  public resetBrowserIsolation() {
    this._browserIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserIsolationInput() {
    return this._browserIsolation.internalValue;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate = new ZeroTrustGatewaySettingsSettingsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustGatewaySettingsSettingsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // custom_certificate - computed: true, optional: true, required: false
  private _customCertificate = new ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: ZeroTrustGatewaySettingsSettingsCustomCertificate) {
    this._customCertificate.internalValue = value;
  }
  public resetCustomCertificate() {
    this._customCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate.internalValue;
  }

  // extended_email_matching - computed: true, optional: true, required: false
  private _extendedEmailMatching = new ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(this, "extended_email_matching");
  public get extendedEmailMatching() {
    return this._extendedEmailMatching;
  }
  public putExtendedEmailMatching(value: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching) {
    this._extendedEmailMatching.internalValue = value;
  }
  public resetExtendedEmailMatching() {
    this._extendedEmailMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedEmailMatchingInput() {
    return this._extendedEmailMatching.internalValue;
  }

  // fips - computed: true, optional: true, required: false
  private _fips = new ZeroTrustGatewaySettingsSettingsFipsOutputReference(this, "fips");
  public get fips() {
    return this._fips;
  }
  public putFips(value: ZeroTrustGatewaySettingsSettingsFips) {
    this._fips.internalValue = value;
  }
  public resetFips() {
    this._fips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsInput() {
    return this._fips.internalValue;
  }

  // protocol_detection - computed: true, optional: true, required: false
  private _protocolDetection = new ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(this, "protocol_detection");
  public get protocolDetection() {
    return this._protocolDetection;
  }
  public putProtocolDetection(value: ZeroTrustGatewaySettingsSettingsProtocolDetection) {
    this._protocolDetection.internalValue = value;
  }
  public resetProtocolDetection() {
    this._protocolDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolDetectionInput() {
    return this._protocolDetection.internalValue;
  }

  // sandbox - computed: true, optional: true, required: false
  private _sandbox = new ZeroTrustGatewaySettingsSettingsSandboxOutputReference(this, "sandbox");
  public get sandbox() {
    return this._sandbox;
  }
  public putSandbox(value: ZeroTrustGatewaySettingsSettingsSandbox) {
    this._sandbox.internalValue = value;
  }
  public resetSandbox() {
    this._sandbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInput() {
    return this._sandbox.internalValue;
  }

  // tls_decrypt - computed: true, optional: true, required: false
  private _tlsDecrypt = new ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(this, "tls_decrypt");
  public get tlsDecrypt() {
    return this._tlsDecrypt;
  }
  public putTlsDecrypt(value: ZeroTrustGatewaySettingsSettingsTlsDecrypt) {
    this._tlsDecrypt.internalValue = value;
  }
  public resetTlsDecrypt() {
    this._tlsDecrypt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDecryptInput() {
    return this._tlsDecrypt.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
export class ZeroTrustGatewaySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustGatewaySettings to import
  * @param importFromId The id of the existing ZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustGatewaySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustGatewaySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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
    this._settings.internalValue = config.settings;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new ZeroTrustGatewaySettingsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ZeroTrustGatewaySettingsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      settings: zeroTrustGatewaySettingsSettingsToTerraform(this._settings.internalValue),
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
      settings: {
        value: zeroTrustGatewaySettingsSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustGatewaySettingsSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
