# `dataCloudflareByoIpPrefix` Submodule <a name="`dataCloudflareByoIpPrefix` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareByoIpPrefix <a name="DataCloudflareByoIpPrefix" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareByoIpPrefix(Construct Scope, string Id, DataCloudflareByoIpPrefixConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig">DataCloudflareByoIpPrefixConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig">DataCloudflareByoIpPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetPrefixId">ResetPrefixId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPrefixId` <a name="ResetPrefixId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetPrefixId"></a>

```csharp
private void ResetPrefixId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareByoIpPrefix.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareByoIpPrefix.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareByoIpPrefix.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareByoIpPrefix.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareByoIpPrefix to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareByoIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareByoIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertised">Advertised</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertisedModifiedAt">AdvertisedModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.approved">Approved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.loaDocumentId">LoaDocumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandEnabled">OnDemandEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandLocked">OnDemandLocked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixIdInput">PrefixIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixId">PrefixId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Advertised`<sup>Required</sup> <a name="Advertised" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertised"></a>

```csharp
public IResolvable Advertised { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AdvertisedModifiedAt`<sup>Required</sup> <a name="AdvertisedModifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertisedModifiedAt"></a>

```csharp
public string AdvertisedModifiedAt { get; }
```

- *Type:* string

---

##### `Approved`<sup>Required</sup> <a name="Approved" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.approved"></a>

```csharp
public string Approved { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoaDocumentId`<sup>Required</sup> <a name="LoaDocumentId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.loaDocumentId"></a>

```csharp
public string LoaDocumentId { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `OnDemandEnabled`<sup>Required</sup> <a name="OnDemandEnabled" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandEnabled"></a>

```csharp
public IResolvable OnDemandEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OnDemandLocked`<sup>Required</sup> <a name="OnDemandLocked" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandLocked"></a>

```csharp
public IResolvable OnDemandLocked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `PrefixIdInput`<sup>Optional</sup> <a name="PrefixIdInput" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixIdInput"></a>

```csharp
public string PrefixIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `PrefixId`<sup>Required</sup> <a name="PrefixId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixId"></a>

```csharp
public string PrefixId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareByoIpPrefixConfig <a name="DataCloudflareByoIpPrefixConfig" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareByoIpPrefixConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string PrefixId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.prefixId">PrefixId</a></code> | <code>string</code> | Identifier of an IP Prefix. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/byo_ip_prefix#account_id DataCloudflareByoIpPrefix#account_id}

---

##### `PrefixId`<sup>Optional</sup> <a name="PrefixId" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.prefixId"></a>

```csharp
public string PrefixId { get; set; }
```

- *Type:* string

Identifier of an IP Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/byo_ip_prefix#prefix_id DataCloudflareByoIpPrefix#prefix_id}

---



