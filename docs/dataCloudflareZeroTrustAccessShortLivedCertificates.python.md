# `dataCloudflareZeroTrustAccessShortLivedCertificates` Submodule <a name="`dataCloudflareZeroTrustAccessShortLivedCertificates` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificates <a name="DataCloudflareZeroTrustAccessShortLivedCertificates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates cloudflare_zero_trust_access_short_lived_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates(
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
  max_items: typing.Union[int, float] = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#account_id DataCloudflareZeroTrustAccessShortLivedCertificates#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#max_items DataCloudflareZeroTrustAccessShortLivedCertificates#max_items}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#zone_id DataCloudflareZeroTrustAccessShortLivedCertificates#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessShortLivedCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessShortLivedCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessShortLivedCertificates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessShortLivedCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessShortLivedCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList">DataCloudflareZeroTrustAccessShortLivedCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.result"></a>

```python
result: DataCloudflareZeroTrustAccessShortLivedCertificatesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList">DataCloudflareZeroTrustAccessShortLivedCertificatesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificatesConfig <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#account_id DataCloudflareZeroTrustAccessShortLivedCertificates#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#max_items DataCloudflareZeroTrustAccessShortLivedCertificates#max_items}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_access_short_lived_certificates#zone_id DataCloudflareZeroTrustAccessShortLivedCertificates#zone_id}

---

### DataCloudflareZeroTrustAccessShortLivedCertificatesResult <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificatesResultList <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_access_short_lived_certificates

dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.aud">aud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult">DataCloudflareZeroTrustAccessShortLivedCertificatesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.aud"></a>

```python
aud: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessShortLivedCertificatesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult">DataCloudflareZeroTrustAccessShortLivedCertificatesResult</a>

---



