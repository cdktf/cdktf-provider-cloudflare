// https://www.terraform.io/docs/providers/cloudflare/r/healthcheck
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#address Healthcheck#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#allow_insecure Healthcheck#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#check_regions Healthcheck#check_regions}
  */
  readonly checkRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#consecutive_fails Healthcheck#consecutive_fails}
  */
  readonly consecutiveFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#consecutive_successes Healthcheck#consecutive_successes}
  */
  readonly consecutiveSuccesses?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#description Healthcheck#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#expected_body Healthcheck#expected_body}
  */
  readonly expectedBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#expected_codes Healthcheck#expected_codes}
  */
  readonly expectedCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#follow_redirects Healthcheck#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#interval Healthcheck#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#method Healthcheck#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#name Healthcheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#notification_email_addresses Healthcheck#notification_email_addresses}
  */
  readonly notificationEmailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#notification_suspended Healthcheck#notification_suspended}
  */
  readonly notificationSuspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#path Healthcheck#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#port Healthcheck#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#retries Healthcheck#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#suspended Healthcheck#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#timeout Healthcheck#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#type Healthcheck#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#zone_id Healthcheck#zone_id}
  */
  readonly zoneId: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#header Healthcheck#header}
  */
  readonly header?: HealthcheckHeader[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#timeouts Healthcheck#timeouts}
  */
  readonly timeouts?: HealthcheckTimeouts;
}
export interface HealthcheckHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#header Healthcheck#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#values Healthcheck#values}
  */
  readonly values: string[];
}

export function healthcheckHeaderToTerraform(struct?: HealthcheckHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface HealthcheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck#create Healthcheck#create}
  */
  readonly create?: string;
}

export function healthcheckTimeoutsToTerraform(struct?: HealthcheckTimeoutsOutputReference | HealthcheckTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class HealthcheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcheckTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck cloudflare_healthcheck}
*/
export class Healthcheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_healthcheck";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/healthcheck cloudflare_healthcheck} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcheckConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcheckConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_healthcheck',
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
    this._address = config.address;
    this._allowInsecure = config.allowInsecure;
    this._checkRegions = config.checkRegions;
    this._consecutiveFails = config.consecutiveFails;
    this._consecutiveSuccesses = config.consecutiveSuccesses;
    this._description = config.description;
    this._expectedBody = config.expectedBody;
    this._expectedCodes = config.expectedCodes;
    this._followRedirects = config.followRedirects;
    this._interval = config.interval;
    this._method = config.method;
    this._name = config.name;
    this._notificationEmailAddresses = config.notificationEmailAddresses;
    this._notificationSuspended = config.notificationSuspended;
    this._path = config.path;
    this._port = config.port;
    this._retries = config.retries;
    this._suspended = config.suspended;
    this._timeout = config.timeout;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._header = config.header;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // check_regions - computed: true, optional: true, required: false
  private _checkRegions?: string[]; 
  public get checkRegions() {
    return this.getListAttribute('check_regions');
  }
  public set checkRegions(value: string[]) {
    this._checkRegions = value;
  }
  public resetCheckRegions() {
    this._checkRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRegionsInput() {
    return this._checkRegions;
  }

  // consecutive_fails - computed: false, optional: true, required: false
  private _consecutiveFails?: number; 
  public get consecutiveFails() {
    return this.getNumberAttribute('consecutive_fails');
  }
  public set consecutiveFails(value: number) {
    this._consecutiveFails = value;
  }
  public resetConsecutiveFails() {
    this._consecutiveFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveFailsInput() {
    return this._consecutiveFails;
  }

  // consecutive_successes - computed: false, optional: true, required: false
  private _consecutiveSuccesses?: number; 
  public get consecutiveSuccesses() {
    return this.getNumberAttribute('consecutive_successes');
  }
  public set consecutiveSuccesses(value: number) {
    this._consecutiveSuccesses = value;
  }
  public resetConsecutiveSuccesses() {
    this._consecutiveSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveSuccessesInput() {
    return this._consecutiveSuccesses;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expected_body - computed: false, optional: true, required: false
  private _expectedBody?: string; 
  public get expectedBody() {
    return this.getStringAttribute('expected_body');
  }
  public set expectedBody(value: string) {
    this._expectedBody = value;
  }
  public resetExpectedBody() {
    this._expectedBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBodyInput() {
    return this._expectedBody;
  }

  // expected_codes - computed: false, optional: true, required: false
  private _expectedCodes?: string[]; 
  public get expectedCodes() {
    return this.getListAttribute('expected_codes');
  }
  public set expectedCodes(value: string[]) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_email_addresses - computed: false, optional: true, required: false
  private _notificationEmailAddresses?: string[]; 
  public get notificationEmailAddresses() {
    return this.getListAttribute('notification_email_addresses');
  }
  public set notificationEmailAddresses(value: string[]) {
    this._notificationEmailAddresses = value;
  }
  public resetNotificationEmailAddresses() {
    this._notificationEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailAddressesInput() {
    return this._notificationEmailAddresses;
  }

  // notification_suspended - computed: false, optional: true, required: false
  private _notificationSuspended?: boolean | cdktf.IResolvable; 
  public get notificationSuspended() {
    return this.getBooleanAttribute('notification_suspended');
  }
  public set notificationSuspended(value: boolean | cdktf.IResolvable) {
    this._notificationSuspended = value;
  }
  public resetNotificationSuspended() {
    this._notificationSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSuspendedInput() {
    return this._notificationSuspended;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // header - computed: false, optional: true, required: false
  private _header?: HealthcheckHeader[] | cdktf.IResolvable; 
  public get header() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('header')));
  }
  public set header(value: HealthcheckHeader[] | cdktf.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcheckTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcheckTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      allow_insecure: cdktf.booleanToTerraform(this._allowInsecure),
      check_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._checkRegions),
      consecutive_fails: cdktf.numberToTerraform(this._consecutiveFails),
      consecutive_successes: cdktf.numberToTerraform(this._consecutiveSuccesses),
      description: cdktf.stringToTerraform(this._description),
      expected_body: cdktf.stringToTerraform(this._expectedBody),
      expected_codes: cdktf.listMapper(cdktf.stringToTerraform)(this._expectedCodes),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      interval: cdktf.numberToTerraform(this._interval),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      notification_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationEmailAddresses),
      notification_suspended: cdktf.booleanToTerraform(this._notificationSuspended),
      path: cdktf.stringToTerraform(this._path),
      port: cdktf.numberToTerraform(this._port),
      retries: cdktf.numberToTerraform(this._retries),
      suspended: cdktf.booleanToTerraform(this._suspended),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      header: cdktf.listMapper(healthcheckHeaderToTerraform)(this._header),
      timeouts: healthcheckTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
