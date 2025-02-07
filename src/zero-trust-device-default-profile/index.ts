// https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDeviceDefaultProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}
  */
  readonly accountId: string;
  /**
  * Whether to allow the user to switch WARP between modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}
  */
  readonly allowModeSwitch?: boolean | cdktf.IResolvable;
  /**
  * Whether to receive update notifications when a new version of the client is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}
  */
  readonly allowUpdates?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow devices to leave the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}
  */
  readonly allowedToLeave?: boolean | cdktf.IResolvable;
  /**
  * The amount of time in seconds to reconnect after having been disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}
  */
  readonly autoConnect?: number;
  /**
  * Turn on the captive portal after the specified amount of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}
  */
  readonly captivePortal?: number;
  /**
  * If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}
  */
  readonly disableAutoFallback?: boolean | cdktf.IResolvable;
  /**
  * Whether to add Microsoft IPs to Split Tunnel exclusions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}
  */
  readonly excludeOfficeIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}
  */
  readonly serviceModeV2?: ZeroTrustDeviceDefaultProfileServiceModeV2;
  /**
  * The URL to launch when the Send Feedback button is clicked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}
  */
  readonly supportUrl?: string;
  /**
  * Whether to allow the user to turn off the WARP switch and disconnect the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}
  */
  readonly switchLocked?: boolean | cdktf.IResolvable;
  /**
  * Determines which tunnel protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
}
export interface ZeroTrustDeviceDefaultProfileExclude {
}

export function zeroTrustDeviceDefaultProfileExcludeToTerraform(struct?: ZeroTrustDeviceDefaultProfileExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustDeviceDefaultProfileExcludeToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustDeviceDefaultProfileExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustDeviceDefaultProfileExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDeviceDefaultProfileExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }
}

export class ZeroTrustDeviceDefaultProfileExcludeList extends cdktf.ComplexList {

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
  public get(index: number): ZeroTrustDeviceDefaultProfileExcludeOutputReference {
    return new ZeroTrustDeviceDefaultProfileExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDeviceDefaultProfileFallbackDomains {
}

export function zeroTrustDeviceDefaultProfileFallbackDomainsToTerraform(struct?: ZeroTrustDeviceDefaultProfileFallbackDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileFallbackDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustDeviceDefaultProfileFallbackDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDeviceDefaultProfileFallbackDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_server - computed: true, optional: false, required: false
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class ZeroTrustDeviceDefaultProfileFallbackDomainsList extends cdktf.ComplexList {

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
  public get(index: number): ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference {
    return new ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDeviceDefaultProfileInclude {
}

export function zeroTrustDeviceDefaultProfileIncludeToTerraform(struct?: ZeroTrustDeviceDefaultProfileInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustDeviceDefaultProfileIncludeToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustDeviceDefaultProfileIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustDeviceDefaultProfileInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDeviceDefaultProfileInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }
}

export class ZeroTrustDeviceDefaultProfileIncludeList extends cdktf.ComplexList {

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
  public get(index: number): ZeroTrustDeviceDefaultProfileIncludeOutputReference {
    return new ZeroTrustDeviceDefaultProfileIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustDeviceDefaultProfileServiceModeV2 {
  /**
  * The mode to run the WARP client under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#mode ZeroTrustDeviceDefaultProfile#mode}
  */
  readonly mode?: string;
  /**
  * The port number when used with proxy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#port ZeroTrustDeviceDefaultProfile#port}
  */
  readonly port?: number;
}

export function zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(struct?: ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._port = value.port;
    }
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}
*/
export class ZeroTrustDeviceDefaultProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_default_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import
  * @param importFromId The id of the existing ZeroTrustDeviceDefaultProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_default_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDeviceDefaultProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDeviceDefaultProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_default_profile',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.0.0',
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
    this._allowModeSwitch = config.allowModeSwitch;
    this._allowUpdates = config.allowUpdates;
    this._allowedToLeave = config.allowedToLeave;
    this._autoConnect = config.autoConnect;
    this._captivePortal = config.captivePortal;
    this._disableAutoFallback = config.disableAutoFallback;
    this._excludeOfficeIps = config.excludeOfficeIps;
    this._serviceModeV2.internalValue = config.serviceModeV2;
    this._supportUrl = config.supportUrl;
    this._switchLocked = config.switchLocked;
    this._tunnelProtocol = config.tunnelProtocol;
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

  // allow_mode_switch - computed: false, optional: true, required: false
  private _allowModeSwitch?: boolean | cdktf.IResolvable; 
  public get allowModeSwitch() {
    return this.getBooleanAttribute('allow_mode_switch');
  }
  public set allowModeSwitch(value: boolean | cdktf.IResolvable) {
    this._allowModeSwitch = value;
  }
  public resetAllowModeSwitch() {
    this._allowModeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeSwitchInput() {
    return this._allowModeSwitch;
  }

  // allow_updates - computed: false, optional: true, required: false
  private _allowUpdates?: boolean | cdktf.IResolvable; 
  public get allowUpdates() {
    return this.getBooleanAttribute('allow_updates');
  }
  public set allowUpdates(value: boolean | cdktf.IResolvable) {
    this._allowUpdates = value;
  }
  public resetAllowUpdates() {
    this._allowUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdatesInput() {
    return this._allowUpdates;
  }

  // allowed_to_leave - computed: false, optional: true, required: false
  private _allowedToLeave?: boolean | cdktf.IResolvable; 
  public get allowedToLeave() {
    return this.getBooleanAttribute('allowed_to_leave');
  }
  public set allowedToLeave(value: boolean | cdktf.IResolvable) {
    this._allowedToLeave = value;
  }
  public resetAllowedToLeave() {
    this._allowedToLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToLeaveInput() {
    return this._allowedToLeave;
  }

  // auto_connect - computed: false, optional: true, required: false
  private _autoConnect?: number; 
  public get autoConnect() {
    return this.getNumberAttribute('auto_connect');
  }
  public set autoConnect(value: number) {
    this._autoConnect = value;
  }
  public resetAutoConnect() {
    this._autoConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConnectInput() {
    return this._autoConnect;
  }

  // captive_portal - computed: false, optional: true, required: false
  private _captivePortal?: number; 
  public get captivePortal() {
    return this.getNumberAttribute('captive_portal');
  }
  public set captivePortal(value: number) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // disable_auto_fallback - computed: false, optional: true, required: false
  private _disableAutoFallback?: boolean | cdktf.IResolvable; 
  public get disableAutoFallback() {
    return this.getBooleanAttribute('disable_auto_fallback');
  }
  public set disableAutoFallback(value: boolean | cdktf.IResolvable) {
    this._disableAutoFallback = value;
  }
  public resetDisableAutoFallback() {
    this._disableAutoFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoFallbackInput() {
    return this._disableAutoFallback;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude - computed: true, optional: false, required: false
  private _exclude = new ZeroTrustDeviceDefaultProfileExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }

  // exclude_office_ips - computed: false, optional: true, required: false
  private _excludeOfficeIps?: boolean | cdktf.IResolvable; 
  public get excludeOfficeIps() {
    return this.getBooleanAttribute('exclude_office_ips');
  }
  public set excludeOfficeIps(value: boolean | cdktf.IResolvable) {
    this._excludeOfficeIps = value;
  }
  public resetExcludeOfficeIps() {
    this._excludeOfficeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOfficeIpsInput() {
    return this._excludeOfficeIps;
  }

  // fallback_domains - computed: true, optional: false, required: false
  private _fallbackDomains = new ZeroTrustDeviceDefaultProfileFallbackDomainsList(this, "fallback_domains", false);
  public get fallbackDomains() {
    return this._fallbackDomains;
  }

  // gateway_unique_id - computed: true, optional: false, required: false
  public get gatewayUniqueId() {
    return this.getStringAttribute('gateway_unique_id');
  }

  // include - computed: true, optional: false, required: false
  private _include = new ZeroTrustDeviceDefaultProfileIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }

  // service_mode_v2 - computed: true, optional: true, required: false
  private _serviceModeV2 = new ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(this, "service_mode_v2");
  public get serviceModeV2() {
    return this._serviceModeV2;
  }
  public putServiceModeV2(value: ZeroTrustDeviceDefaultProfileServiceModeV2) {
    this._serviceModeV2.internalValue = value;
  }
  public resetServiceModeV2() {
    this._serviceModeV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceModeV2Input() {
    return this._serviceModeV2.internalValue;
  }

  // support_url - computed: false, optional: true, required: false
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

  // switch_locked - computed: false, optional: true, required: false
  private _switchLocked?: boolean | cdktf.IResolvable; 
  public get switchLocked() {
    return this.getBooleanAttribute('switch_locked');
  }
  public set switchLocked(value: boolean | cdktf.IResolvable) {
    this._switchLocked = value;
  }
  public resetSwitchLocked() {
    this._switchLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchLockedInput() {
    return this._switchLocked;
  }

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allow_mode_switch: cdktf.booleanToTerraform(this._allowModeSwitch),
      allow_updates: cdktf.booleanToTerraform(this._allowUpdates),
      allowed_to_leave: cdktf.booleanToTerraform(this._allowedToLeave),
      auto_connect: cdktf.numberToTerraform(this._autoConnect),
      captive_portal: cdktf.numberToTerraform(this._captivePortal),
      disable_auto_fallback: cdktf.booleanToTerraform(this._disableAutoFallback),
      exclude_office_ips: cdktf.booleanToTerraform(this._excludeOfficeIps),
      service_mode_v2: zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(this._serviceModeV2.internalValue),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      switch_locked: cdktf.booleanToTerraform(this._switchLocked),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
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
      allow_mode_switch: {
        value: cdktf.booleanToHclTerraform(this._allowModeSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_updates: {
        value: cdktf.booleanToHclTerraform(this._allowUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_to_leave: {
        value: cdktf.booleanToHclTerraform(this._allowedToLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_connect: {
        value: cdktf.numberToHclTerraform(this._autoConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      captive_portal: {
        value: cdktf.numberToHclTerraform(this._captivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_auto_fallback: {
        value: cdktf.booleanToHclTerraform(this._disableAutoFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_office_ips: {
        value: cdktf.booleanToHclTerraform(this._excludeOfficeIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_mode_v2: {
        value: zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(this._serviceModeV2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustDeviceDefaultProfileServiceModeV2",
      },
      support_url: {
        value: cdktf.stringToHclTerraform(this._supportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_locked: {
        value: cdktf.booleanToHclTerraform(this._switchLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
