# `cloudflare_teams_account`

Refer to the Terraform Registory for docs: [`cloudflare_teams_account`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account).

# `teamsAccount` Submodule <a name="`teamsAccount` Submodule" id="@cdktf/provider-cloudflare.teamsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsAccount <a name="TeamsAccount" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account cloudflare_teams_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccount(
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
  antivirus: TeamsAccountAntivirus = None,
  block_page: TeamsAccountBlockPage = None,
  fips: TeamsAccountFips = None,
  id: str = None,
  logging: TeamsAccountLogging = None,
  payload_log: TeamsAccountPayloadLog = None,
  protocol_detection_enabled: typing.Union[bool, IResolvable] = None,
  proxy: TeamsAccountProxy = None,
  tls_decrypt_enabled: typing.Union[bool, IResolvable] = None,
  url_browser_isolation_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#id TeamsAccount#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.protocolDetectionEnabled">protocol_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.tlsDecryptEnabled">tls_decrypt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.urlBrowserIsolationEnabled">url_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Safely browse websites in Browser Isolation through a URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#account_id TeamsAccount#account_id}

---

##### `activity_log_enabled`<sup>Optional</sup> <a name="activity_log_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.activityLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}

---

##### `antivirus`<sup>Optional</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.antivirus"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#antivirus TeamsAccount#antivirus}

---

##### `block_page`<sup>Optional</sup> <a name="block_page" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.blockPage"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#block_page TeamsAccount#block_page}

---

##### `fips`<sup>Optional</sup> <a name="fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.fips"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#fips TeamsAccount#fips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#id TeamsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#logging TeamsAccount#logging}

---

##### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.payloadLog"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#payload_log TeamsAccount#payload_log}

---

##### `protocol_detection_enabled`<sup>Optional</sup> <a name="protocol_detection_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.protocolDetectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#protocol_detection_enabled TeamsAccount#protocol_detection_enabled}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.proxy"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#proxy TeamsAccount#proxy}

---

##### `tls_decrypt_enabled`<sup>Optional</sup> <a name="tls_decrypt_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.tlsDecryptEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}

---

##### `url_browser_isolation_enabled`<sup>Optional</sup> <a name="url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.urlBrowserIsolationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Safely browse websites in Browser Isolation through a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus">put_antivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage">put_block_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips">put_fips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog">put_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy">put_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled">reset_activity_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus">reset_antivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage">reset_block_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips">reset_fips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog">reset_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProtocolDetectionEnabled">reset_protocol_detection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy">reset_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled">reset_tls_decrypt_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled">reset_url_browser_isolation_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_antivirus` <a name="put_antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus"></a>

```python
def put_antivirus(
  enabled_download_phase: typing.Union[bool, IResolvable],
  enabled_upload_phase: typing.Union[bool, IResolvable],
  fail_closed: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled_download_phase`<sup>Required</sup> <a name="enabled_download_phase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.enabledDownloadPhase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}

---

###### `enabled_upload_phase`<sup>Required</sup> <a name="enabled_upload_phase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.enabledUploadPhase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}

---

###### `fail_closed`<sup>Required</sup> <a name="fail_closed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.failClosed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#fail_closed TeamsAccount#fail_closed}

---

##### `put_block_page` <a name="put_block_page" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage"></a>

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

###### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.backgroundColor"></a>

- *Type:* str

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#background_color TeamsAccount#background_color}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

###### `footer_text`<sup>Optional</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.footerText"></a>

- *Type:* str

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#footer_text TeamsAccount#footer_text}

---

###### `header_text`<sup>Optional</sup> <a name="header_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.headerText"></a>

- *Type:* str

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#header_text TeamsAccount#header_text}

---

###### `logo_path`<sup>Optional</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.logoPath"></a>

- *Type:* str

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#logo_path TeamsAccount#logo_path}

---

###### `mailto_address`<sup>Optional</sup> <a name="mailto_address" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.mailtoAddress"></a>

- *Type:* str

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#mailto_address TeamsAccount#mailto_address}

---

###### `mailto_subject`<sup>Optional</sup> <a name="mailto_subject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.mailtoSubject"></a>

- *Type:* str

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#mailto_subject TeamsAccount#mailto_subject}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.name"></a>

- *Type:* str

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#name TeamsAccount#name}

---

##### `put_fips` <a name="put_fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips"></a>

```python
def put_fips(
  tls: typing.Union[bool, IResolvable] = None
) -> None
```

###### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips.parameter.tls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#tls TeamsAccount#tls}

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging"></a>

```python
def put_logging(
  redact_pii: typing.Union[bool, IResolvable],
  settings_by_rule_type: TeamsAccountLoggingSettingsByRuleType
) -> None
```

###### `redact_pii`<sup>Required</sup> <a name="redact_pii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging.parameter.redactPii"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#redact_pii TeamsAccount#redact_pii}

---

###### `settings_by_rule_type`<sup>Required</sup> <a name="settings_by_rule_type" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging.parameter.settingsByRuleType"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}

---

##### `put_payload_log` <a name="put_payload_log" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog"></a>

```python
def put_payload_log(
  public_key: str
) -> None
```

###### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog.parameter.publicKey"></a>

- *Type:* str

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

##### `put_proxy` <a name="put_proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy"></a>

```python
def put_proxy(
  root_ca: typing.Union[bool, IResolvable],
  tcp: typing.Union[bool, IResolvable],
  udp: typing.Union[bool, IResolvable]
) -> None
```

###### `root_ca`<sup>Required</sup> <a name="root_ca" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.rootCa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#root_ca TeamsAccount#root_ca}

---

###### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.tcp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#tcp TeamsAccount#tcp}

---

###### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.udp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#udp TeamsAccount#udp}

---

##### `reset_activity_log_enabled` <a name="reset_activity_log_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled"></a>

```python
def reset_activity_log_enabled() -> None
```

##### `reset_antivirus` <a name="reset_antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus"></a>

```python
def reset_antivirus() -> None
```

##### `reset_block_page` <a name="reset_block_page" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage"></a>

```python
def reset_block_page() -> None
```

##### `reset_fips` <a name="reset_fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips"></a>

```python
def reset_fips() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_payload_log` <a name="reset_payload_log" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog"></a>

```python
def reset_payload_log() -> None
```

##### `reset_protocol_detection_enabled` <a name="reset_protocol_detection_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProtocolDetectionEnabled"></a>

```python
def reset_protocol_detection_enabled() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy"></a>

```python
def reset_proxy() -> None
```

##### `reset_tls_decrypt_enabled` <a name="reset_tls_decrypt_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled"></a>

```python
def reset_tls_decrypt_enabled() -> None
```

##### `reset_url_browser_isolation_enabled` <a name="reset_url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled"></a>

```python
def reset_url_browser_isolation_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput">activity_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput">antivirus_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput">block_page_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput">fips_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput">payload_log_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabledInput">protocol_detection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput">proxy_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput">tls_decrypt_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput">url_browser_isolation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabled">protocol_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled">tls_decrypt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled">url_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `antivirus`<sup>Required</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus"></a>

```python
antivirus: TeamsAccountAntivirusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a>

---

##### `block_page`<sup>Required</sup> <a name="block_page" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage"></a>

```python
block_page: TeamsAccountBlockPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a>

---

##### `fips`<sup>Required</sup> <a name="fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips"></a>

```python
fips: TeamsAccountFipsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging"></a>

```python
logging: TeamsAccountLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a>

---

##### `payload_log`<sup>Required</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog"></a>

```python
payload_log: TeamsAccountPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy"></a>

```python
proxy: TeamsAccountProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `activity_log_enabled_input`<sup>Optional</sup> <a name="activity_log_enabled_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput"></a>

```python
activity_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `antivirus_input`<sup>Optional</sup> <a name="antivirus_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput"></a>

```python
antivirus_input: TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `block_page_input`<sup>Optional</sup> <a name="block_page_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput"></a>

```python
block_page_input: TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `fips_input`<sup>Optional</sup> <a name="fips_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput"></a>

```python
fips_input: TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput"></a>

```python
logging_input: TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `payload_log_input`<sup>Optional</sup> <a name="payload_log_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput"></a>

```python
payload_log_input: TeamsAccountPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `protocol_detection_enabled_input`<sup>Optional</sup> <a name="protocol_detection_enabled_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabledInput"></a>

```python
protocol_detection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput"></a>

```python
proxy_input: TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `tls_decrypt_enabled_input`<sup>Optional</sup> <a name="tls_decrypt_enabled_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput"></a>

```python
tls_decrypt_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_browser_isolation_enabled_input`<sup>Optional</sup> <a name="url_browser_isolation_enabled_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput"></a>

```python
url_browser_isolation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `activity_log_enabled`<sup>Required</sup> <a name="activity_log_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled"></a>

```python
activity_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol_detection_enabled`<sup>Required</sup> <a name="protocol_detection_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabled"></a>

```python
protocol_detection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_decrypt_enabled`<sup>Required</sup> <a name="tls_decrypt_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled"></a>

```python
tls_decrypt_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_browser_isolation_enabled`<sup>Required</sup> <a name="url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled"></a>

```python
url_browser_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsAccountAntivirus <a name="TeamsAccountAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountAntivirus(
  enabled_download_phase: typing.Union[bool, IResolvable],
  enabled_upload_phase: typing.Union[bool, IResolvable],
  fail_closed: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase">enabled_download_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase">enabled_upload_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed">fail_closed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Block requests for files that cannot be scanned. |

---

##### `enabled_download_phase`<sup>Required</sup> <a name="enabled_download_phase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase"></a>

```python
enabled_download_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}

---

##### `enabled_upload_phase`<sup>Required</sup> <a name="enabled_upload_phase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase"></a>

```python
enabled_upload_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}

---

##### `fail_closed`<sup>Required</sup> <a name="fail_closed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed"></a>

```python
fail_closed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#fail_closed TeamsAccount#fail_closed}

---

### TeamsAccountBlockPage <a name="TeamsAccountBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountBlockPage(
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
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor">background_color</a></code> | <code>str</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText">footer_text</a></code> | <code>str</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText">header_text</a></code> | <code>str</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath">logo_path</a></code> | <code>str</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress">mailto_address</a></code> | <code>str</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject">mailto_subject</a></code> | <code>str</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name">name</a></code> | <code>str</code> | Name of block page configuration. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#background_color TeamsAccount#background_color}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `footer_text`<sup>Optional</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#footer_text TeamsAccount#footer_text}

---

##### `header_text`<sup>Optional</sup> <a name="header_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#header_text TeamsAccount#header_text}

---

##### `logo_path`<sup>Optional</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#logo_path TeamsAccount#logo_path}

---

##### `mailto_address`<sup>Optional</sup> <a name="mailto_address" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress"></a>

```python
mailto_address: str
```

- *Type:* str

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#mailto_address TeamsAccount#mailto_address}

---

##### `mailto_subject`<sup>Optional</sup> <a name="mailto_subject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject"></a>

```python
mailto_subject: str
```

- *Type:* str

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#mailto_subject TeamsAccount#mailto_subject}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name"></a>

```python
name: str
```

- *Type:* str

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#name TeamsAccount#name}

---

### TeamsAccountConfig <a name="TeamsAccountConfig" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  activity_log_enabled: typing.Union[bool, IResolvable] = None,
  antivirus: TeamsAccountAntivirus = None,
  block_page: TeamsAccountBlockPage = None,
  fips: TeamsAccountFips = None,
  id: str = None,
  logging: TeamsAccountLogging = None,
  payload_log: TeamsAccountPayloadLog = None,
  protocol_detection_enabled: typing.Union[bool, IResolvable] = None,
  proxy: TeamsAccountProxy = None,
  tls_decrypt_enabled: typing.Union[bool, IResolvable] = None,
  url_browser_isolation_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage">block_page</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#id TeamsAccount#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.protocolDetectionEnabled">protocol_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled">tls_decrypt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled">url_browser_isolation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Safely browse websites in Browser Isolation through a URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#account_id TeamsAccount#account_id}

---

##### `activity_log_enabled`<sup>Optional</sup> <a name="activity_log_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled"></a>

```python
activity_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}

---

##### `antivirus`<sup>Optional</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus"></a>

```python
antivirus: TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#antivirus TeamsAccount#antivirus}

---

##### `block_page`<sup>Optional</sup> <a name="block_page" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage"></a>

```python
block_page: TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#block_page TeamsAccount#block_page}

---

##### `fips`<sup>Optional</sup> <a name="fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips"></a>

```python
fips: TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#fips TeamsAccount#fips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#id TeamsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging"></a>

```python
logging: TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#logging TeamsAccount#logging}

---

##### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog"></a>

```python
payload_log: TeamsAccountPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#payload_log TeamsAccount#payload_log}

---

##### `protocol_detection_enabled`<sup>Optional</sup> <a name="protocol_detection_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.protocolDetectionEnabled"></a>

```python
protocol_detection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#protocol_detection_enabled TeamsAccount#protocol_detection_enabled}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy"></a>

```python
proxy: TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#proxy TeamsAccount#proxy}

---

##### `tls_decrypt_enabled`<sup>Optional</sup> <a name="tls_decrypt_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled"></a>

```python
tls_decrypt_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}

---

##### `url_browser_isolation_enabled`<sup>Optional</sup> <a name="url_browser_isolation_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled"></a>

```python
url_browser_isolation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Safely browse websites in Browser Isolation through a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}

---

### TeamsAccountFips <a name="TeamsAccountFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountFips(
  tls: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#tls TeamsAccount#tls}

---

### TeamsAccountLogging <a name="TeamsAccountLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLogging(
  redact_pii: typing.Union[bool, IResolvable],
  settings_by_rule_type: TeamsAccountLoggingSettingsByRuleType
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii">redact_pii</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType">settings_by_rule_type</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `redact_pii`<sup>Required</sup> <a name="redact_pii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii"></a>

```python
redact_pii: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#redact_pii TeamsAccount#redact_pii}

---

##### `settings_by_rule_type`<sup>Required</sup> <a name="settings_by_rule_type" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType"></a>

```python
settings_by_rule_type: TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}

---

### TeamsAccountLoggingSettingsByRuleType <a name="TeamsAccountLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleType(
  dns: TeamsAccountLoggingSettingsByRuleTypeDns,
  http: TeamsAccountLoggingSettingsByRuleTypeHttp,
  l4: TeamsAccountLoggingSettingsByRuleTypeL4
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns"></a>

```python
dns: TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#dns TeamsAccount#dns}

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http"></a>

```python
http: TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#http TeamsAccount#http}

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4"></a>

```python
l4: TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#l4 TeamsAccount#l4}

---

### TeamsAccountLoggingSettingsByRuleTypeDns <a name="TeamsAccountLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeHttp <a name="TeamsAccountLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeL4 <a name="TeamsAccountLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountPayloadLog <a name="TeamsAccountPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountPayloadLog(
  public_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey">public_key</a></code> | <code>str</code> | Public key used to encrypt matched payloads. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

### TeamsAccountProxy <a name="TeamsAccountProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountProxy(
  root_ca: typing.Union[bool, IResolvable],
  tcp: typing.Union[bool, IResolvable],
  udp: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa">root_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp">tcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp">udp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |

---

##### `root_ca`<sup>Required</sup> <a name="root_ca" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa"></a>

```python
root_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#root_ca TeamsAccount#root_ca}

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp"></a>

```python
tcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#tcp TeamsAccount#tcp}

---

##### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp"></a>

```python
udp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#udp TeamsAccount#udp}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsAccountAntivirusOutputReference <a name="TeamsAccountAntivirusOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountAntivirusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput">enabled_download_phase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput">enabled_upload_phase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput">fail_closed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase">enabled_download_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase">enabled_upload_phase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed">fail_closed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_download_phase_input`<sup>Optional</sup> <a name="enabled_download_phase_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```python
enabled_download_phase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_upload_phase_input`<sup>Optional</sup> <a name="enabled_upload_phase_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```python
enabled_upload_phase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fail_closed_input`<sup>Optional</sup> <a name="fail_closed_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput"></a>

```python
fail_closed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_download_phase`<sup>Required</sup> <a name="enabled_download_phase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase"></a>

```python
enabled_download_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_upload_phase`<sup>Required</sup> <a name="enabled_upload_phase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase"></a>

```python
enabled_upload_phase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fail_closed`<sup>Required</sup> <a name="fail_closed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed"></a>

```python
fail_closed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---


### TeamsAccountBlockPageOutputReference <a name="TeamsAccountBlockPageOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountBlockPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText">reset_footer_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText">reset_header_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath">reset_logo_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress">reset_mailto_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject">reset_mailto_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background_color` <a name="reset_background_color" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_footer_text` <a name="reset_footer_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText"></a>

```python
def reset_footer_text() -> None
```

##### `reset_header_text` <a name="reset_header_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText"></a>

```python
def reset_header_text() -> None
```

##### `reset_logo_path` <a name="reset_logo_path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath"></a>

```python
def reset_logo_path() -> None
```

##### `reset_mailto_address` <a name="reset_mailto_address" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress"></a>

```python
def reset_mailto_address() -> None
```

##### `reset_mailto_subject` <a name="reset_mailto_subject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject"></a>

```python
def reset_mailto_subject() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput">footer_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput">header_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput">logo_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput">mailto_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput">mailto_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText">footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText">header_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath">logo_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress">mailto_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject">mailto_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `footer_text_input`<sup>Optional</sup> <a name="footer_text_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput"></a>

```python
footer_text_input: str
```

- *Type:* str

---

##### `header_text_input`<sup>Optional</sup> <a name="header_text_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput"></a>

```python
header_text_input: str
```

- *Type:* str

---

##### `logo_path_input`<sup>Optional</sup> <a name="logo_path_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput"></a>

```python
logo_path_input: str
```

- *Type:* str

---

##### `mailto_address_input`<sup>Optional</sup> <a name="mailto_address_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput"></a>

```python
mailto_address_input: str
```

- *Type:* str

---

##### `mailto_subject_input`<sup>Optional</sup> <a name="mailto_subject_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput"></a>

```python
mailto_subject_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

---

##### `logo_path`<sup>Required</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

---

##### `mailto_address`<sup>Required</sup> <a name="mailto_address" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress"></a>

```python
mailto_address: str
```

- *Type:* str

---

##### `mailto_subject`<sup>Required</sup> <a name="mailto_subject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject"></a>

```python
mailto_subject: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---


### TeamsAccountFipsOutputReference <a name="TeamsAccountFipsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountFipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tls` <a name="reset_tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput">tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls">tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput"></a>

```python
tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls"></a>

```python
tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---


### TeamsAccountLoggingOutputReference <a name="TeamsAccountLoggingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType">put_settings_by_rule_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings_by_rule_type` <a name="put_settings_by_rule_type" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType"></a>

```python
def put_settings_by_rule_type(
  dns: TeamsAccountLoggingSettingsByRuleTypeDns,
  http: TeamsAccountLoggingSettingsByRuleTypeHttp,
  l4: TeamsAccountLoggingSettingsByRuleTypeL4
) -> None
```

###### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#dns TeamsAccount#dns}

---

###### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.http"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#http TeamsAccount#http}

---

###### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.l4"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#l4 TeamsAccount#l4}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType">settings_by_rule_type</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput">redact_pii_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput">settings_by_rule_type_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii">redact_pii</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings_by_rule_type`<sup>Required</sup> <a name="settings_by_rule_type" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType"></a>

```python
settings_by_rule_type: TeamsAccountLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a>

---

##### `redact_pii_input`<sup>Optional</sup> <a name="redact_pii_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput"></a>

```python
redact_pii_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `settings_by_rule_type_input`<sup>Optional</sup> <a name="settings_by_rule_type_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```python
settings_by_rule_type_input: TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---

##### `redact_pii`<sup>Required</sup> <a name="redact_pii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii"></a>

```python
redact_pii: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---


### TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">log_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">log_blocks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_all_input`<sup>Optional</sup> <a name="log_all_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```python
log_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks_input`<sup>Optional</sup> <a name="log_blocks_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```python
log_blocks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---


### TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">log_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">log_blocks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_all_input`<sup>Optional</sup> <a name="log_all_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```python
log_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks_input`<sup>Optional</sup> <a name="log_blocks_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```python
log_blocks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---


### TeamsAccountLoggingSettingsByRuleTypeL4OutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">log_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">log_blocks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll">log_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">log_blocks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_all_input`<sup>Optional</sup> <a name="log_all_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```python
log_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks_input`<sup>Optional</sup> <a name="log_blocks_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```python
log_blocks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```python
log_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```python
log_blocks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


### TeamsAccountLoggingSettingsByRuleTypeOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4">put_l4</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns` <a name="put_dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```python
def put_dns(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
) -> None
```

###### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns.parameter.logAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

###### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns.parameter.logBlocks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

##### `put_http` <a name="put_http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```python
def put_http(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
) -> None
```

###### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.logAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

###### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.logBlocks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

##### `put_l4` <a name="put_l4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```python
def put_l4(
  log_all: typing.Union[bool, IResolvable],
  log_blocks: typing.Union[bool, IResolvable]
) -> None
```

###### `log_all`<sup>Required</sup> <a name="log_all" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4.parameter.logAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

###### `log_blocks`<sup>Required</sup> <a name="log_blocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4.parameter.logBlocks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput">dns_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput">http_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input">l4_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```python
dns: TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```python
http: TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```python
l4: TeamsAccountLoggingSettingsByRuleTypeL4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```python
dns_input: TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```python
http_input: TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `l4_input`<sup>Optional</sup> <a name="l4_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```python
l4_input: TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


### TeamsAccountPayloadLogOutputReference <a name="TeamsAccountPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountPayloadLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---


### TeamsAccountProxyOutputReference <a name="TeamsAccountProxyOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_account

teamsAccount.TeamsAccountProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput">root_ca_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput">tcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput">udp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa">root_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp">tcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp">udp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_ca_input`<sup>Optional</sup> <a name="root_ca_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput"></a>

```python
root_ca_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp_input`<sup>Optional</sup> <a name="tcp_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput"></a>

```python
tcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `udp_input`<sup>Optional</sup> <a name="udp_input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput"></a>

```python
udp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_ca`<sup>Required</sup> <a name="root_ca" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa"></a>

```python
root_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp"></a>

```python
tcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp"></a>

```python
udp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue"></a>

```python
internal_value: TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---



