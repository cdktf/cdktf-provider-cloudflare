# `dataCloudflareWorkersCustomDomain` Submodule <a name="`dataCloudflareWorkersCustomDomain` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersCustomDomain <a name="DataCloudflareWorkersCustomDomain" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain(
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
  domain_id: str = None,
  filter: DataCloudflareWorkersCustomDomainFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifer of the account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Identifer of the Worker Domain. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.accountId"></a>

- *Type:* str

Identifer of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#account_id DataCloudflareWorkersCustomDomain#account_id}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.domainId"></a>

- *Type:* str

Identifer of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#domain_id DataCloudflareWorkersCustomDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter"></a>

```python
def put_filter(
  environment: str = None,
  hostname: str = None,
  service: str = None,
  zone_id: str = None,
  zone_name: str = None
) -> None
```

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.environment"></a>

- *Type:* str

Worker environment associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#environment DataCloudflareWorkersCustomDomain#environment}

---

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.hostname"></a>

- *Type:* str

Hostname of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#hostname DataCloudflareWorkersCustomDomain#hostname}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.service"></a>

- *Type:* str

Worker service associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#service DataCloudflareWorkersCustomDomain#service}

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.zoneId"></a>

- *Type:* str

Identifier of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#zone_id DataCloudflareWorkersCustomDomain#zone_id}

---

###### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.zoneName"></a>

- *Type:* str

Name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#zone_name DataCloudflareWorkersCustomDomain#zone_name}

---

##### `reset_domain_id` <a name="reset_domain_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareWorkersCustomDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareWorkersCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference">DataCloudflareWorkersCustomDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filter"></a>

```python
filter: DataCloudflareWorkersCustomDomainFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference">DataCloudflareWorkersCustomDomainFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareWorkersCustomDomainFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersCustomDomainConfig <a name="DataCloudflareWorkersCustomDomainConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  domain_id: str = None,
  filter: DataCloudflareWorkersCustomDomainFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifer of the account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.domainId">domain_id</a></code> | <code>str</code> | Identifer of the Worker Domain. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifer of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#account_id DataCloudflareWorkersCustomDomain#account_id}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Identifer of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#domain_id DataCloudflareWorkersCustomDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.filter"></a>

```python
filter: DataCloudflareWorkersCustomDomainFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}.

---

### DataCloudflareWorkersCustomDomainFilter <a name="DataCloudflareWorkersCustomDomainFilter" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter(
  environment: str = None,
  hostname: str = None,
  service: str = None,
  zone_id: str = None,
  zone_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.environment">environment</a></code> | <code>str</code> | Worker environment associated with the zone and hostname. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.hostname">hostname</a></code> | <code>str</code> | Hostname of the Worker Domain. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.service">service</a></code> | <code>str</code> | Worker service associated with the zone and hostname. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier of the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneName">zone_name</a></code> | <code>str</code> | Name of the zone. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.environment"></a>

```python
environment: str
```

- *Type:* str

Worker environment associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#environment DataCloudflareWorkersCustomDomain#environment}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#hostname DataCloudflareWorkersCustomDomain#hostname}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.service"></a>

```python
service: str
```

- *Type:* str

Worker service associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#service DataCloudflareWorkersCustomDomain#service}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#zone_id DataCloudflareWorkersCustomDomain#zone_id}

---

##### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

Name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/workers_custom_domain#zone_name DataCloudflareWorkersCustomDomain#zone_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersCustomDomainFilterOutputReference <a name="DataCloudflareWorkersCustomDomainFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_custom_domain

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneName">reset_zone_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

##### `reset_zone_name` <a name="reset_zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneName"></a>

```python
def reset_zone_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneNameInput">zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_name_input`<sup>Optional</sup> <a name="zone_name_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneNameInput"></a>

```python
zone_name_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareWorkersCustomDomainFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>]

---



