# `zeroTrustGatewaySettings` Submodule <a name="`zeroTrustGatewaySettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewaySettings <a name="ZeroTrustGatewaySettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  activity_log_enabled: typing.Union[bool, IResolvable] = None,
  antivirus: ZeroTrustGatewaySettingsAntivirus = None,
  block_page: ZeroTrustGatewaySettingsBlockPage = None,
  body_scanning: ZeroTrustGatewaySettingsBodyScanning = None,
  certificate: ZeroTrustGatewaySettingsCertificate = None,
  custom_certificate: ZeroTrustGatewaySettingsCustomCertificate = None,
  extended_email_matching: ZeroTrustGatewaySettingsExtendedEmailMatching = None,
  fips: ZeroTrustGatewaySettingsFips = None,
  id: str = None,
  logging: ZeroTrustGatewaySettingsLogging = None,
  non_identity_browser_isolation_enabled: typing.Union[bool, IResolvable] = None,
  payload_log: ZeroTrustGatewaySettingsPayloadLog = None,
  protocol_detection_enabled: typing.Union[bool, IResolvable] = None,
  proxy: ZeroTrustGatewaySettingsProxy = None,
  ssh_session_log: ZeroTrustGatewaySettingsSshSessionLog = None,
  tls_decrypt_enabled: typing.Union[bool, IResolvable] = None,
  url_browser_isolation_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.bodyScanning">body_scanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.customCertificate">custom_certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.extendedEmailMatching">extended_email_matching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.nonIdentityBrowserIsolationEnabled">non_identity_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.protocolDetectionEnabled">protocol_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.sshSessionLog">ssh_session_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.tlsDecryptEnabled">tls_decrypt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.urlBrowserIsolationEnabled">url_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}

---

##### `activity_log_enabled`<sup>Optional</sup> <a name="activity_log_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.activityLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#activity_log_enabled ZeroTrustGatewaySettings#activity_log_enabled}

---

##### `antivirus`<sup>Optional</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.antivirus"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}

---

##### `block_page`<sup>Optional</sup> <a name="block_page" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.blockPage"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}

---

##### `body_scanning`<sup>Optional</sup> <a name="body_scanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.bodyScanning"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.certificate"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}

---

##### `custom_certificate`<sup>Optional</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.customCertificate"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}

---

##### `extended_email_matching`<sup>Optional</sup> <a name="extended_email_matching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.extendedEmailMatching"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}

---

##### `fips`<sup>Optional</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.fips"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#logging ZeroTrustGatewaySettings#logging}

---

##### `non_identity_browser_isolation_enabled`<sup>Optional</sup> <a name="non_identity_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.nonIdentityBrowserIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#non_identity_browser_isolation_enabled ZeroTrustGatewaySettings#non_identity_browser_isolation_enabled}

---

##### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.payloadLog"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#payload_log ZeroTrustGatewaySettings#payload_log}

---

##### `protocol_detection_enabled`<sup>Optional</sup> <a name="protocol_detection_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.protocolDetectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#protocol_detection_enabled ZeroTrustGatewaySettings#protocol_detection_enabled}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.proxy"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#proxy ZeroTrustGatewaySettings#proxy}

---

##### `ssh_session_log`<sup>Optional</sup> <a name="ssh_session_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.sshSessionLog"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#ssh_session_log ZeroTrustGatewaySettings#ssh_session_log}

---

##### `tls_decrypt_enabled`<sup>Optional</sup> <a name="tls_decrypt_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.tlsDecryptEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tls_decrypt_enabled ZeroTrustGatewaySettings#tls_decrypt_enabled}

---

##### `url_browser_isolation_enabled`<sup>Optional</sup> <a name="url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.urlBrowserIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus">put_antivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage">put_block_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning">put_body_scanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate">put_custom_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching">put_extended_email_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips">put_fips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog">put_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy">put_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog">put_ssh_session_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled">reset_activity_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus">reset_antivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage">reset_block_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning">reset_body_scanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate">reset_custom_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching">reset_extended_email_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips">reset_fips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled">reset_non_identity_browser_isolation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog">reset_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled">reset_protocol_detection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy">reset_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog">reset_ssh_session_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled">reset_tls_decrypt_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled">reset_url_browser_isolation_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_antivirus` <a name="put_antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus"></a>

```python
def put_antivirus(
  enabled_download_phase: typing.Union[bool, IResolvable],
  enabled_upload_phase: typing.Union[bool, IResolvable],
  fail_closed: typing.Union[bool, IResolvable],
  notification_settings: ZeroTrustGatewaySettingsAntivirusNotificationSettings = None
) -> None
```

###### `enabled_download_phase`<sup>Required</sup> <a name="enabled_download_phase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.enabledDownloadPhase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}

---

###### `enabled_upload_phase`<sup>Required</sup> <a name="enabled_upload_phase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.enabledUploadPhase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}

---

###### `fail_closed`<sup>Required</sup> <a name="fail_closed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.failClosed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}

---

###### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.notificationSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}

---

##### `put_block_page` <a name="put_block_page" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage"></a>

```python
def put_block_page(
  background_color: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  footer_text: str = None,
  header_text: str = None,
  logo_path: str = None,
  mailto_address: str = None,
  mailto_subject: str = None,
  name: str = None
) -> None
```

###### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.backgroundColor"></a>

- *Type:* str

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

###### `footer_text`<sup>Optional</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.footerText"></a>

- *Type:* str

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}

---

###### `header_text`<sup>Optional</sup> <a name="header_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.headerText"></a>

- *Type:* str

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}

---

###### `logo_path`<sup>Optional</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.logoPath"></a>

- *Type:* str

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}

---

###### `mailto_address`<sup>Optional</sup> <a name="mailto_address" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.mailtoAddress"></a>

- *Type:* str

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}

---

###### `mailto_subject`<sup>Optional</sup> <a name="mailto_subject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.mailtoSubject"></a>

- *Type:* str

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.name"></a>

- *Type:* str

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}

---

##### `put_body_scanning` <a name="put_body_scanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning"></a>

```python
def put_body_scanning(
  inspection_mode: str
) -> None
```

###### `inspection_mode`<sup>Required</sup> <a name="inspection_mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning.parameter.inspectionMode"></a>

- *Type:* str

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}

---

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate"></a>

```python
def put_certificate(
  id: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate.parameter.id"></a>

- *Type:* str

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `put_custom_certificate` <a name="put_custom_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate"></a>

```python
def put_custom_certificate(
  enabled: typing.Union[bool, IResolvable],
  id: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate.parameter.id"></a>

- *Type:* str

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `put_extended_email_matching` <a name="put_extended_email_matching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching"></a>

```python
def put_extended_email_matching(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `put_fips` <a name="put_fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips"></a>

```python
def put_fips(
  tls: typing.Union[bool, IResolvable] = None
) -> None
```

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips.parameter.tls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging"></a>

```python
def put_logging(
  redact_pii: typing.Union[bool, IResolvable],
  settings_by_rule_type: ZeroTrustGatewaySettingsLoggingSettingsByRuleType
) -> None
```

###### `redact_pii`<sup>Required</sup> <a name="redact_pii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging.parameter.redactPii"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#redact_pii ZeroTrustGatewaySettings#redact_pii}

---

###### `settings_by_rule_type`<sup>Required</sup> <a name="settings_by_rule_type" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging.parameter.settingsByRuleType"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#settings_by_rule_type ZeroTrustGatewaySettings#settings_by_rule_type}

---

##### `put_payload_log` <a name="put_payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog"></a>

```python
def put_payload_log(
  public_key: str
) -> None
```

###### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog.parameter.publicKey"></a>

- *Type:* str

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

##### `put_proxy` <a name="put_proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy"></a>

```python
def put_proxy(
  disable_for_time: typing.Union[int, float],
  root_ca: typing.Union[bool, IResolvable],
  tcp: typing.Union[bool, IResolvable],
  udp: typing.Union[bool, IResolvable],
  virtual_ip: typing.Union[bool, IResolvable]
) -> None
```

###### `disable_for_time`<sup>Required</sup> <a name="disable_for_time" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.disableForTime"></a>

- *Type:* typing.Union[int, float]

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#disable_for_time ZeroTrustGatewaySettings#disable_for_time}

---

###### `root_ca`<sup>Required</sup> <a name="root_ca" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.rootCa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#root_ca ZeroTrustGatewaySettings#root_ca}

---

###### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.tcp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tcp ZeroTrustGatewaySettings#tcp}

---

###### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.udp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#udp ZeroTrustGatewaySettings#udp}

---

###### `virtual_ip`<sup>Required</sup> <a name="virtual_ip" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.virtualIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#virtual_ip ZeroTrustGatewaySettings#virtual_ip}

---

##### `put_ssh_session_log` <a name="put_ssh_session_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog"></a>

```python
def put_ssh_session_log(
  public_key: str
) -> None
```

###### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog.parameter.publicKey"></a>

- *Type:* str

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

##### `reset_activity_log_enabled` <a name="reset_activity_log_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled"></a>

```python
def reset_activity_log_enabled() -> None
```

##### `reset_antivirus` <a name="reset_antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus"></a>

```python
def reset_antivirus() -> None
```

##### `reset_block_page` <a name="reset_block_page" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage"></a>

```python
def reset_block_page() -> None
```

##### `reset_body_scanning` <a name="reset_body_scanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning"></a>

```python
def reset_body_scanning() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_custom_certificate` <a name="reset_custom_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate"></a>

```python
def reset_custom_certificate() -> None
```

##### `reset_extended_email_matching` <a name="reset_extended_email_matching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching"></a>

```python
def reset_extended_email_matching() -> None
```

##### `reset_fips` <a name="reset_fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips"></a>

```python
def reset_fips() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_non_identity_browser_isolation_enabled` <a name="reset_non_identity_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled"></a>

```python
def reset_non_identity_browser_isolation_enabled() -> None
```

##### `reset_payload_log` <a name="reset_payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog"></a>

```python
def reset_payload_log() -> None
```

##### `reset_protocol_detection_enabled` <a name="reset_protocol_detection_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled"></a>

```python
def reset_protocol_detection_enabled() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy"></a>

```python
def reset_proxy() -> None
```

##### `reset_ssh_session_log` <a name="reset_ssh_session_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog"></a>

```python
def reset_ssh_session_log() -> None
```

##### `reset_tls_decrypt_enabled` <a name="reset_tls_decrypt_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled"></a>

```python
def reset_tls_decrypt_enabled() -> None
```

##### `reset_url_browser_isolation_enabled` <a name="reset_url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled"></a>

```python
def reset_url_browser_isolation_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustGatewaySettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustGatewaySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning">body_scanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate">custom_certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching">extended_email_matching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog">ssh_session_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput">activity_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput">antivirus_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput">block_page_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput">body_scanning_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput">certificate_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput">custom_certificate_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput">extended_email_matching_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput">fips_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput">non_identity_browser_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput">payload_log_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput">protocol_detection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput">proxy_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput">ssh_session_log_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput">tls_decrypt_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput">url_browser_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled">non_identity_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled">protocol_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled">tls_decrypt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled">url_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `antivirus`<sup>Required</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus"></a>

```python
antivirus: ZeroTrustGatewaySettingsAntivirusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a>

---

##### `block_page`<sup>Required</sup> <a name="block_page" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage"></a>

```python
block_page: ZeroTrustGatewaySettingsBlockPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a>

---

##### `body_scanning`<sup>Required</sup> <a name="body_scanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning"></a>

```python
body_scanning: ZeroTrustGatewaySettingsBodyScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate"></a>

```python
certificate: ZeroTrustGatewaySettingsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a>

---

##### `custom_certificate`<sup>Required</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate"></a>

```python
custom_certificate: ZeroTrustGatewaySettingsCustomCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a>

---

##### `extended_email_matching`<sup>Required</sup> <a name="extended_email_matching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching"></a>

```python
extended_email_matching: ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a>

---

##### `fips`<sup>Required</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips"></a>

```python
fips: ZeroTrustGatewaySettingsFipsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging"></a>

```python
logging: ZeroTrustGatewaySettingsLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a>

---

##### `payload_log`<sup>Required</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog"></a>

```python
payload_log: ZeroTrustGatewaySettingsPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy"></a>

```python
proxy: ZeroTrustGatewaySettingsProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a>

---

##### `ssh_session_log`<sup>Required</sup> <a name="ssh_session_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog"></a>

```python
ssh_session_log: ZeroTrustGatewaySettingsSshSessionLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `activity_log_enabled_input`<sup>Optional</sup> <a name="activity_log_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput"></a>

```python
activity_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `antivirus_input`<sup>Optional</sup> <a name="antivirus_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput"></a>

```python
antivirus_input: ZeroTrustGatewaySettingsAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `block_page_input`<sup>Optional</sup> <a name="block_page_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput"></a>

```python
block_page_input: ZeroTrustGatewaySettingsBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `body_scanning_input`<sup>Optional</sup> <a name="body_scanning_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput"></a>

```python
body_scanning_input: ZeroTrustGatewaySettingsBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput"></a>

```python
certificate_input: ZeroTrustGatewaySettingsCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `custom_certificate_input`<sup>Optional</sup> <a name="custom_certificate_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput"></a>

```python
custom_certificate_input: ZeroTrustGatewaySettingsCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `extended_email_matching_input`<sup>Optional</sup> <a name="extended_email_matching_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput"></a>

```python
extended_email_matching_input: ZeroTrustGatewaySettingsExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `fips_input`<sup>Optional</sup> <a name="fips_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput"></a>

```python
fips_input: ZeroTrustGatewaySettingsFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput"></a>

```python
logging_input: ZeroTrustGatewaySettingsLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `non_identity_browser_isolation_enabled_input`<sup>Optional</sup> <a name="non_identity_browser_isolation_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput"></a>

```python
non_identity_browser_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `payload_log_input`<sup>Optional</sup> <a name="payload_log_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput"></a>

```python
payload_log_input: ZeroTrustGatewaySettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `protocol_detection_enabled_input`<sup>Optional</sup> <a name="protocol_detection_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput"></a>

```python
protocol_detection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput"></a>

```python
proxy_input: ZeroTrustGatewaySettingsProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `ssh_session_log_input`<sup>Optional</sup> <a name="ssh_session_log_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput"></a>

```python
ssh_session_log_input: ZeroTrustGatewaySettingsSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `tls_decrypt_enabled_input`<sup>Optional</sup> <a name="tls_decrypt_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput"></a>

```python
tls_decrypt_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_browser_isolation_enabled_input`<sup>Optional</sup> <a name="url_browser_isolation_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput"></a>

```python
url_browser_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `activity_log_enabled`<sup>Required</sup> <a name="activity_log_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled"></a>

```python
activity_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `non_identity_browser_isolation_enabled`<sup>Required</sup> <a name="non_identity_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled"></a>

```python
non_identity_browser_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocol_detection_enabled`<sup>Required</sup> <a name="protocol_detection_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled"></a>

```python
protocol_detection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_decrypt_enabled`<sup>Required</sup> <a name="tls_decrypt_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled"></a>

```python
tls_decrypt_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_browser_isolation_enabled`<sup>Required</sup> <a name="url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled"></a>

```python
url_browser_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewaySettingsAntivirus <a name="ZeroTrustGatewaySettingsAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus(
  enabled_download_phase: typing.Union[bool, IResolvable],
  enabled_upload_phase: typing.Union[bool, IResolvable],
  fail_closed: typing.Union[bool, IResolvable],
  notification_settings: ZeroTrustGatewaySettingsAntivirusNotificationSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase">enabled_download_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase">enabled_upload_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed">fail_closed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Block requests for files that cannot be scanned. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | notification_settings block. |

---

##### `enabled_download_phase`<sup>Required</sup> <a name="enabled_download_phase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase"></a>

```python
enabled_download_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}

---

##### `enabled_upload_phase`<sup>Required</sup> <a name="enabled_upload_phase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase"></a>

```python
enabled_upload_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}

---

##### `fail_closed`<sup>Required</sup> <a name="fail_closed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed"></a>

```python
fail_closed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings"></a>

```python
notification_settings: ZeroTrustGatewaySettingsAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}

---

### ZeroTrustGatewaySettingsAntivirusNotificationSettings <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings(
  enabled: typing.Union[bool, IResolvable] = None,
  message: str = None,
  support_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message">message</a></code> | <code>str</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl">support_url</a></code> | <code>str</code> | Support URL to show in the notification. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message"></a>

```python
message: str
```

- *Type:* str

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#message ZeroTrustGatewaySettings#message}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}

---

### ZeroTrustGatewaySettingsBlockPage <a name="ZeroTrustGatewaySettingsBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage(
  background_color: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  footer_text: str = None,
  header_text: str = None,
  logo_path: str = None,
  mailto_address: str = None,
  mailto_subject: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor">background_color</a></code> | <code>str</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText">footer_text</a></code> | <code>str</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText">header_text</a></code> | <code>str</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath">logo_path</a></code> | <code>str</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress">mailto_address</a></code> | <code>str</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject">mailto_subject</a></code> | <code>str</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name">name</a></code> | <code>str</code> | Name of block page configuration. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `footer_text`<sup>Optional</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}

---

##### `header_text`<sup>Optional</sup> <a name="header_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}

---

##### `logo_path`<sup>Optional</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}

---

##### `mailto_address`<sup>Optional</sup> <a name="mailto_address" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress"></a>

```python
mailto_address: str
```

- *Type:* str

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}

---

##### `mailto_subject`<sup>Optional</sup> <a name="mailto_subject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject"></a>

```python
mailto_subject: str
```

- *Type:* str

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name"></a>

```python
name: str
```

- *Type:* str

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}

---

### ZeroTrustGatewaySettingsBodyScanning <a name="ZeroTrustGatewaySettingsBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning(
  inspection_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode">inspection_mode</a></code> | <code>str</code> | Body scanning inspection mode. Available values: `deep`, `shallow`. |

---

##### `inspection_mode`<sup>Required</sup> <a name="inspection_mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode"></a>

```python
inspection_mode: str
```

- *Type:* str

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}

---

### ZeroTrustGatewaySettingsCertificate <a name="ZeroTrustGatewaySettingsCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id">id</a></code> | <code>str</code> | ID of certificate for TLS interception. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsConfig <a name="ZeroTrustGatewaySettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  activity_log_enabled: typing.Union[bool, IResolvable] = None,
  antivirus: ZeroTrustGatewaySettingsAntivirus = None,
  block_page: ZeroTrustGatewaySettingsBlockPage = None,
  body_scanning: ZeroTrustGatewaySettingsBodyScanning = None,
  certificate: ZeroTrustGatewaySettingsCertificate = None,
  custom_certificate: ZeroTrustGatewaySettingsCustomCertificate = None,
  extended_email_matching: ZeroTrustGatewaySettingsExtendedEmailMatching = None,
  fips: ZeroTrustGatewaySettingsFips = None,
  id: str = None,
  logging: ZeroTrustGatewaySettingsLogging = None,
  non_identity_browser_isolation_enabled: typing.Union[bool, IResolvable] = None,
  payload_log: ZeroTrustGatewaySettingsPayloadLog = None,
  protocol_detection_enabled: typing.Union[bool, IResolvable] = None,
  proxy: ZeroTrustGatewaySettingsProxy = None,
  ssh_session_log: ZeroTrustGatewaySettingsSshSessionLog = None,
  tls_decrypt_enabled: typing.Union[bool, IResolvable] = None,
  url_browser_isolation_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning">body_scanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate">custom_certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching">extended_email_matching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled">non_identity_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled">protocol_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog">ssh_session_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled">tls_decrypt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled">url_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}

---

##### `activity_log_enabled`<sup>Optional</sup> <a name="activity_log_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled"></a>

```python
activity_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#activity_log_enabled ZeroTrustGatewaySettings#activity_log_enabled}

---

##### `antivirus`<sup>Optional</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus"></a>

```python
antivirus: ZeroTrustGatewaySettingsAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}

---

##### `block_page`<sup>Optional</sup> <a name="block_page" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage"></a>

```python
block_page: ZeroTrustGatewaySettingsBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}

---

##### `body_scanning`<sup>Optional</sup> <a name="body_scanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning"></a>

```python
body_scanning: ZeroTrustGatewaySettingsBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate"></a>

```python
certificate: ZeroTrustGatewaySettingsCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}

---

##### `custom_certificate`<sup>Optional</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate"></a>

```python
custom_certificate: ZeroTrustGatewaySettingsCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}

---

##### `extended_email_matching`<sup>Optional</sup> <a name="extended_email_matching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching"></a>

```python
extended_email_matching: ZeroTrustGatewaySettingsExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}

---

##### `fips`<sup>Optional</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips"></a>

```python
fips: ZeroTrustGatewaySettingsFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging"></a>

```python
logging: ZeroTrustGatewaySettingsLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#logging ZeroTrustGatewaySettings#logging}

---

##### `non_identity_browser_isolation_enabled`<sup>Optional</sup> <a name="non_identity_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled"></a>

```python
non_identity_browser_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#non_identity_browser_isolation_enabled ZeroTrustGatewaySettings#non_identity_browser_isolation_enabled}

---

##### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog"></a>

```python
payload_log: ZeroTrustGatewaySettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#payload_log ZeroTrustGatewaySettings#payload_log}

---

##### `protocol_detection_enabled`<sup>Optional</sup> <a name="protocol_detection_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled"></a>

```python
protocol_detection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#protocol_detection_enabled ZeroTrustGatewaySettings#protocol_detection_enabled}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy"></a>

```python
proxy: ZeroTrustGatewaySettingsProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#proxy ZeroTrustGatewaySettings#proxy}

---

##### `ssh_session_log`<sup>Optional</sup> <a name="ssh_session_log" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog"></a>

```python
ssh_session_log: ZeroTrustGatewaySettingsSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#ssh_session_log ZeroTrustGatewaySettings#ssh_session_log}

---

##### `tls_decrypt_enabled`<sup>Optional</sup> <a name="tls_decrypt_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled"></a>

```python
tls_decrypt_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tls_decrypt_enabled ZeroTrustGatewaySettings#tls_decrypt_enabled}

---

##### `url_browser_isolation_enabled`<sup>Optional</sup> <a name="url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled"></a>

```python
url_browser_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}

---

### ZeroTrustGatewaySettingsCustomCertificate <a name="ZeroTrustGatewaySettingsCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate(
  enabled: typing.Union[bool, IResolvable],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether TLS encryption should use a custom certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id">id</a></code> | <code>str</code> | ID of custom certificate. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsExtendedEmailMatching <a name="ZeroTrustGatewaySettingsExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsFips <a name="ZeroTrustGatewaySettingsFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips(
  tls: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}

---

### ZeroTrustGatewaySettingsLogging <a name="ZeroTrustGatewaySettingsLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging(
  redact_pii: typing.Union[bool, IResolvable],
  settings_by_rule_type: ZeroTrustGatewaySettingsLoggingSettingsByRuleType
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii">redact_pii</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType">settings_by_rule_type</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `redact_pii`<sup>Required</sup> <a name="redact_pii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii"></a>

```python
redact_pii: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#redact_pii ZeroTrustGatewaySettings#redact_pii}

---

##### `settings_by_rule_type`<sup>Required</sup> <a name="settings_by_rule_type" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType"></a>

```python
settings_by_rule_type: ZeroTrustGatewaySettingsLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#settings_by_rule_type ZeroTrustGatewaySettings#settings_by_rule_type}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleType <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType(
  dns: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns,
  http: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp,
  l4: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns"></a>

```python
dns: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#dns ZeroTrustGatewaySettings#dns}

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http"></a>

```python
http: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#http ZeroTrustGatewaySettings#http}

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4"></a>

```python
l4: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#l4 ZeroTrustGatewaySettings#l4}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsPayloadLog <a name="ZeroTrustGatewaySettingsPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog(
  public_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey">public_key</a></code> | <code>str</code> | Public key used to encrypt matched payloads. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

### ZeroTrustGatewaySettingsProxy <a name="ZeroTrustGatewaySettingsProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy(
  disable_for_time: typing.Union[int, float],
  root_ca: typing.Union[bool, IResolvable],
  tcp: typing.Union[bool, IResolvable],
  udp: typing.Union[bool, IResolvable],
  virtual_ip: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime">disable_for_time</a></code> | <code>typing.Union[int, float]</code> | Sets the time limit in seconds that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa">root_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp">tcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp">udp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp">virtual_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients. |

---

##### `disable_for_time`<sup>Required</sup> <a name="disable_for_time" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime"></a>

```python
disable_for_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#disable_for_time ZeroTrustGatewaySettings#disable_for_time}

---

##### `root_ca`<sup>Required</sup> <a name="root_ca" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa"></a>

```python
root_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#root_ca ZeroTrustGatewaySettings#root_ca}

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp"></a>

```python
tcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tcp ZeroTrustGatewaySettings#tcp}

---

##### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp"></a>

```python
udp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#udp ZeroTrustGatewaySettings#udp}

---

##### `virtual_ip`<sup>Required</sup> <a name="virtual_ip" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp"></a>

```python
virtual_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#virtual_ip ZeroTrustGatewaySettings#virtual_ip}

---

### ZeroTrustGatewaySettingsSshSessionLog <a name="ZeroTrustGatewaySettingsSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog(
  public_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey">public_key</a></code> | <code>str</code> | Public key used to encrypt ssh session. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl">reset_support_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---


### ZeroTrustGatewaySettingsAntivirusOutputReference <a name="ZeroTrustGatewaySettingsAntivirusOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings">reset_notification_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings"></a>

```python
def put_notification_settings(
  enabled: typing.Union[bool, IResolvable] = None,
  message: str = None,
  support_url: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

###### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings.parameter.message"></a>

- *Type:* str

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#message ZeroTrustGatewaySettings#message}

---

###### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings.parameter.supportUrl"></a>

- *Type:* str

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}

---

##### `reset_notification_settings` <a name="reset_notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings"></a>

```python
def reset_notification_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput">enabled_download_phase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput">enabled_upload_phase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput">fail_closed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput">notification_settings_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase">enabled_download_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase">enabled_upload_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed">fail_closed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings"></a>

```python
notification_settings: ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a>

---

##### `enabled_download_phase_input`<sup>Optional</sup> <a name="enabled_download_phase_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```python
enabled_download_phase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_upload_phase_input`<sup>Optional</sup> <a name="enabled_upload_phase_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```python
enabled_upload_phase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fail_closed_input`<sup>Optional</sup> <a name="fail_closed_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput"></a>

```python
fail_closed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput"></a>

```python
notification_settings_input: ZeroTrustGatewaySettingsAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `enabled_download_phase`<sup>Required</sup> <a name="enabled_download_phase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase"></a>

```python
enabled_download_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_upload_phase`<sup>Required</sup> <a name="enabled_upload_phase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase"></a>

```python
enabled_upload_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fail_closed`<sup>Required</sup> <a name="fail_closed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed"></a>

```python
fail_closed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---


### ZeroTrustGatewaySettingsBlockPageOutputReference <a name="ZeroTrustGatewaySettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText">reset_footer_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText">reset_header_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath">reset_logo_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress">reset_mailto_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject">reset_mailto_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background_color` <a name="reset_background_color" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_footer_text` <a name="reset_footer_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText"></a>

```python
def reset_footer_text() -> None
```

##### `reset_header_text` <a name="reset_header_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText"></a>

```python
def reset_header_text() -> None
```

##### `reset_logo_path` <a name="reset_logo_path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath"></a>

```python
def reset_logo_path() -> None
```

##### `reset_mailto_address` <a name="reset_mailto_address" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress"></a>

```python
def reset_mailto_address() -> None
```

##### `reset_mailto_subject` <a name="reset_mailto_subject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject"></a>

```python
def reset_mailto_subject() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput">footer_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput">header_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput">logo_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput">mailto_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput">mailto_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText">footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText">header_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath">logo_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress">mailto_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject">mailto_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `footer_text_input`<sup>Optional</sup> <a name="footer_text_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput"></a>

```python
footer_text_input: str
```

- *Type:* str

---

##### `header_text_input`<sup>Optional</sup> <a name="header_text_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput"></a>

```python
header_text_input: str
```

- *Type:* str

---

##### `logo_path_input`<sup>Optional</sup> <a name="logo_path_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput"></a>

```python
logo_path_input: str
```

- *Type:* str

---

##### `mailto_address_input`<sup>Optional</sup> <a name="mailto_address_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput"></a>

```python
mailto_address_input: str
```

- *Type:* str

---

##### `mailto_subject_input`<sup>Optional</sup> <a name="mailto_subject_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput"></a>

```python
mailto_subject_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

---

##### `logo_path`<sup>Required</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

---

##### `mailto_address`<sup>Required</sup> <a name="mailto_address" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress"></a>

```python
mailto_address: str
```

- *Type:* str

---

##### `mailto_subject`<sup>Required</sup> <a name="mailto_subject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject"></a>

```python
mailto_subject: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---


### ZeroTrustGatewaySettingsBodyScanningOutputReference <a name="ZeroTrustGatewaySettingsBodyScanningOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput">inspection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode">inspection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inspection_mode_input`<sup>Optional</sup> <a name="inspection_mode_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput"></a>

```python
inspection_mode_input: str
```

- *Type:* str

---

##### `inspection_mode`<sup>Required</sup> <a name="inspection_mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode"></a>

```python
inspection_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---


### ZeroTrustGatewaySettingsCertificateOutputReference <a name="ZeroTrustGatewaySettingsCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---


### ZeroTrustGatewaySettingsCustomCertificateOutputReference <a name="ZeroTrustGatewaySettingsCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---


### ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference <a name="ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---


### ZeroTrustGatewaySettingsFipsOutputReference <a name="ZeroTrustGatewaySettingsFipsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---


### ZeroTrustGatewaySettingsLoggingOutputReference <a name="ZeroTrustGatewaySettingsLoggingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType">put_settings_by_rule_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings_by_rule_type` <a name="put_settings_by_rule_type" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType"></a>

```python
def put_settings_by_rule_type(
  dns: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns,
  http: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp,
  l4: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
) -> None
```

###### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#dns ZeroTrustGatewaySettings#dns}

---

###### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType.parameter.http"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#http ZeroTrustGatewaySettings#http}

---

###### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType.parameter.l4"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#l4 ZeroTrustGatewaySettings#l4}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType">settings_by_rule_type</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput">redact_pii_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput">settings_by_rule_type_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii">redact_pii</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings_by_rule_type`<sup>Required</sup> <a name="settings_by_rule_type" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType"></a>

```python
settings_by_rule_type: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a>

---

##### `redact_pii_input`<sup>Optional</sup> <a name="redact_pii_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput"></a>

```python
redact_pii_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `settings_by_rule_type_input`<sup>Optional</sup> <a name="settings_by_rule_type_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```python
settings_by_rule_type_input: ZeroTrustGatewaySettingsLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---

##### `redact_pii`<sup>Required</sup> <a name="redact_pii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii"></a>

```python
redact_pii: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">log_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">log_blocks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_all_input`<sup>Optional</sup> <a name="log_all_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```python
log_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks_input`<sup>Optional</sup> <a name="log_blocks_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```python
log_blocks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">log_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">log_blocks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_all_input`<sup>Optional</sup> <a name="log_all_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```python
log_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks_input`<sup>Optional</sup> <a name="log_blocks_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```python
log_blocks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">log_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">log_blocks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_all_input`<sup>Optional</sup> <a name="log_all_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```python
log_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks_input`<sup>Optional</sup> <a name="log_blocks_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```python
log_blocks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4">put_l4</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns` <a name="put_dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```python
def put_dns(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
) -> None
```

###### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns.parameter.logAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

###### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns.parameter.logBlocks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

##### `put_http` <a name="put_http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```python
def put_http(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
) -> None
```

###### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.logAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

###### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.logBlocks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

##### `put_l4` <a name="put_l4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```python
def put_l4(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
) -> None
```

###### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4.parameter.logAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

###### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4.parameter.logBlocks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput">dns_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput">http_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input">l4_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```python
dns: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```python
http: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```python
l4: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```python
dns_input: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```python
http_input: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `l4_input`<sup>Optional</sup> <a name="l4_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```python
l4_input: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


### ZeroTrustGatewaySettingsPayloadLogOutputReference <a name="ZeroTrustGatewaySettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---


### ZeroTrustGatewaySettingsProxyOutputReference <a name="ZeroTrustGatewaySettingsProxyOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput">disable_for_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput">root_ca_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput">tcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput">udp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput">virtual_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime">disable_for_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa">root_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp">tcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp">udp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp">virtual_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_for_time_input`<sup>Optional</sup> <a name="disable_for_time_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput"></a>

```python
disable_for_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_ca_input`<sup>Optional</sup> <a name="root_ca_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput"></a>

```python
root_ca_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp_input`<sup>Optional</sup> <a name="tcp_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput"></a>

```python
tcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `udp_input`<sup>Optional</sup> <a name="udp_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput"></a>

```python
udp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_ip_input`<sup>Optional</sup> <a name="virtual_ip_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput"></a>

```python
virtual_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_for_time`<sup>Required</sup> <a name="disable_for_time" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime"></a>

```python
disable_for_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_ca`<sup>Required</sup> <a name="root_ca" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa"></a>

```python
root_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp"></a>

```python
tcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp"></a>

```python
udp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_ip`<sup>Required</sup> <a name="virtual_ip" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp"></a>

```python
virtual_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---


### ZeroTrustGatewaySettingsSshSessionLogOutputReference <a name="ZeroTrustGatewaySettingsSshSessionLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_settings

zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewaySettingsSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---



