# `dataCloudflareZeroTrustAccessMtlsHostnameSettings` Submodule <a name="`dataCloudflareZeroTrustAccessMtlsHostnameSettings` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessMtlsHostnameSettings <a name="DataCloudflareZeroTrustAccessMtlsHostnameSettings" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_mtls_hostname_settings

dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_access_mtls_hostname_settings#account_id DataCloudflareZeroTrustAccessMtlsHostnameSettings#account_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_access_mtls_hostname_settings#zone_id DataCloudflareZeroTrustAccessMtlsHostnameSettings#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_mtls_hostname_settings

dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_mtls_hostname_settings

dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_mtls_hostname_settings

dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_mtls_hostname_settings

dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessMtlsHostnameSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessMtlsHostnameSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessMtlsHostnameSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.chinaNetwork">china_network</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.clientCertificateForwarding">client_certificate_forwarding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `china_network`<sup>Required</sup> <a name="china_network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.chinaNetwork"></a>

```python
china_network: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_forwarding`<sup>Required</sup> <a name="client_certificate_forwarding" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.clientCertificateForwarding"></a>

```python
client_certificate_forwarding: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig <a name="DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_mtls_hostname_settings

dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_access_mtls_hostname_settings#account_id DataCloudflareZeroTrustAccessMtlsHostnameSettings#account_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessMtlsHostnameSettings.DataCloudflareZeroTrustAccessMtlsHostnameSettingsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_access_mtls_hostname_settings#zone_id DataCloudflareZeroTrustAccessMtlsHostnameSettings#zone_id}

---



