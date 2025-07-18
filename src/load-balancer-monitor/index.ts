/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#account_id LoadBalancerMonitor#account_id}
  */
  readonly accountId: string;
  /**
  * Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#allow_insecure LoadBalancerMonitor#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#consecutive_down LoadBalancerMonitor#consecutive_down}
  */
  readonly consecutiveDown?: number;
  /**
  * To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#consecutive_up LoadBalancerMonitor#consecutive_up}
  */
  readonly consecutiveUp?: number;
  /**
  * Object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#description LoadBalancerMonitor#description}
  */
  readonly description?: string;
  /**
  * A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#expected_body LoadBalancerMonitor#expected_body}
  */
  readonly expectedBody?: string;
  /**
  * The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#expected_codes LoadBalancerMonitor#expected_codes}
  */
  readonly expectedCodes?: string;
  /**
  * Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#follow_redirects LoadBalancerMonitor#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#header LoadBalancerMonitor#header}
  */
  readonly header?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#interval LoadBalancerMonitor#interval}
  */
  readonly interval?: number;
  /**
  * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#method LoadBalancerMonitor#method}
  */
  readonly method?: string;
  /**
  * The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#path LoadBalancerMonitor#path}
  */
  readonly path?: string;
  /**
  * The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#port LoadBalancerMonitor#port}
  */
  readonly port?: number;
  /**
  * Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#probe_zone LoadBalancerMonitor#probe_zone}
  */
  readonly probeZone?: string;
  /**
  * The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#retries LoadBalancerMonitor#retries}
  */
  readonly retries?: number;
  /**
  * The timeout (in seconds) before marking the health check as failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#timeout LoadBalancerMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
  * Available values: "http", "https", "tcp", "udp_icmp", "icmp_ping", "smtp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#type LoadBalancerMonitor#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
export class LoadBalancerMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerMonitor to import
  * @param importFromId The id of the existing LoadBalancerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_monitor',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._allowInsecure = config.allowInsecure;
    this._consecutiveDown = config.consecutiveDown;
    this._consecutiveUp = config.consecutiveUp;
    this._description = config.description;
    this._expectedBody = config.expectedBody;
    this._expectedCodes = config.expectedCodes;
    this._followRedirects = config.followRedirects;
    this._header = config.header;
    this._interval = config.interval;
    this._method = config.method;
    this._path = config.path;
    this._port = config.port;
    this._probeZone = config.probeZone;
    this._retries = config.retries;
    this._timeout = config.timeout;
    this._type = config.type;
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

  // allow_insecure - computed: true, optional: true, required: false
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

  // consecutive_down - computed: true, optional: true, required: false
  private _consecutiveDown?: number; 
  public get consecutiveDown() {
    return this.getNumberAttribute('consecutive_down');
  }
  public set consecutiveDown(value: number) {
    this._consecutiveDown = value;
  }
  public resetConsecutiveDown() {
    this._consecutiveDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveDownInput() {
    return this._consecutiveDown;
  }

  // consecutive_up - computed: true, optional: true, required: false
  private _consecutiveUp?: number; 
  public get consecutiveUp() {
    return this.getNumberAttribute('consecutive_up');
  }
  public set consecutiveUp(value: number) {
    this._consecutiveUp = value;
  }
  public resetConsecutiveUp() {
    this._consecutiveUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveUpInput() {
    return this._consecutiveUp;
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
  private _expectedCodes?: string; 
  public get expectedCodes() {
    return this.getStringAttribute('expected_codes');
  }
  public set expectedCodes(value: string) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes;
  }

  // follow_redirects - computed: true, optional: true, required: false
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

  // header - computed: false, optional: true, required: false
  private _header?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get header() {
    return this.interpolationForAttribute('header');
  }
  public set header(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
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

  // probe_zone - computed: false, optional: true, required: false
  private _probeZone?: string; 
  public get probeZone() {
    return this.getStringAttribute('probe_zone');
  }
  public set probeZone(value: string) {
    this._probeZone = value;
  }
  public resetProbeZone() {
    this._probeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeZoneInput() {
    return this._probeZone;
  }

  // retries - computed: true, optional: true, required: false
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

  // timeout - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allow_insecure: cdktf.booleanToTerraform(this._allowInsecure),
      consecutive_down: cdktf.numberToTerraform(this._consecutiveDown),
      consecutive_up: cdktf.numberToTerraform(this._consecutiveUp),
      description: cdktf.stringToTerraform(this._description),
      expected_body: cdktf.stringToTerraform(this._expectedBody),
      expected_codes: cdktf.stringToTerraform(this._expectedCodes),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      header: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._header),
      interval: cdktf.numberToTerraform(this._interval),
      method: cdktf.stringToTerraform(this._method),
      path: cdktf.stringToTerraform(this._path),
      port: cdktf.numberToTerraform(this._port),
      probe_zone: cdktf.stringToTerraform(this._probeZone),
      retries: cdktf.numberToTerraform(this._retries),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
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
      allow_insecure: {
        value: cdktf.booleanToHclTerraform(this._allowInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consecutive_down: {
        value: cdktf.numberToHclTerraform(this._consecutiveDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consecutive_up: {
        value: cdktf.numberToHclTerraform(this._consecutiveUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_body: {
        value: cdktf.stringToHclTerraform(this._expectedBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_codes: {
        value: cdktf.stringToHclTerraform(this._expectedCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow_redirects: {
        value: cdktf.booleanToHclTerraform(this._followRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._header),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_zone: {
        value: cdktf.stringToHclTerraform(this._probeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
