# `dataCloudflareWorkersCustomDomains` Submodule <a name="`dataCloudflareWorkersCustomDomains` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersCustomDomains <a name="DataCloudflareWorkersCustomDomains" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains cloudflare_workers_custom_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains(
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
  environment: str = None,
  hostname: str = None,
  max_items: typing.Union[int, float] = None,
  service: str = None,
  zone_id: str = None,
  zone_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifer of the account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Worker environment associated with the zone and hostname. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Hostname of the Worker Domain. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.service">service</a></code> | <code>str</code> | Worker service associated with the zone and hostname. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier of the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.zoneName">zone_name</a></code> | <code>str</code> | Name of the zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.accountId"></a>

- *Type:* str

Identifer of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#account_id DataCloudflareWorkersCustomDomains#account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.environment"></a>

- *Type:* str

Worker environment associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#environment DataCloudflareWorkersCustomDomains#environment}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.hostname"></a>

- *Type:* str

Hostname of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#hostname DataCloudflareWorkersCustomDomains#hostname}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#max_items DataCloudflareWorkersCustomDomains#max_items}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.service"></a>

- *Type:* str

Worker service associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#service DataCloudflareWorkersCustomDomains#service}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#zone_id DataCloudflareWorkersCustomDomains#zone_id}

---

##### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.Initializer.parameter.zoneName"></a>

- *Type:* str

Name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#zone_name DataCloudflareWorkersCustomDomains#zone_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetZoneId">reset_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetZoneName">reset_zone_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

##### `reset_zone_name` <a name="reset_zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.resetZoneName"></a>

```python
def reset_zone_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareWorkersCustomDomains resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareWorkersCustomDomains resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareWorkersCustomDomains to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareWorkersCustomDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersCustomDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList">DataCloudflareWorkersCustomDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneNameInput">zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.result"></a>

```python
result: DataCloudflareWorkersCustomDomainsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList">DataCloudflareWorkersCustomDomainsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_name_input`<sup>Optional</sup> <a name="zone_name_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneNameInput"></a>

```python
zone_name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomains.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersCustomDomainsConfig <a name="DataCloudflareWorkersCustomDomainsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  environment: str = None,
  hostname: str = None,
  max_items: typing.Union[int, float] = None,
  service: str = None,
  zone_id: str = None,
  zone_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifer of the account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.environment">environment</a></code> | <code>str</code> | Worker environment associated with the zone and hostname. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.hostname">hostname</a></code> | <code>str</code> | Hostname of the Worker Domain. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.service">service</a></code> | <code>str</code> | Worker service associated with the zone and hostname. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier of the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.zoneName">zone_name</a></code> | <code>str</code> | Name of the zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifer of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#account_id DataCloudflareWorkersCustomDomains#account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Worker environment associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#environment DataCloudflareWorkersCustomDomains#environment}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#hostname DataCloudflareWorkersCustomDomains#hostname}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#max_items DataCloudflareWorkersCustomDomains#max_items}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Worker service associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#service DataCloudflareWorkersCustomDomains#service}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#zone_id DataCloudflareWorkersCustomDomains#zone_id}

---

##### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsConfig.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

Name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/workers_custom_domains#zone_name DataCloudflareWorkersCustomDomains#zone_name}

---

### DataCloudflareWorkersCustomDomainsResult <a name="DataCloudflareWorkersCustomDomainsResult" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersCustomDomainsResultList <a name="DataCloudflareWorkersCustomDomainsResultList" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWorkersCustomDomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWorkersCustomDomainsResultOutputReference <a name="DataCloudflareWorkersCustomDomainsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domains

dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResult">DataCloudflareWorkersCustomDomainsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWorkersCustomDomainsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomains.DataCloudflareWorkersCustomDomainsResult">DataCloudflareWorkersCustomDomainsResult</a>

---



