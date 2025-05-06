# `dataCloudflareDnsZoneTransfersTsig` Submodule <a name="`dataCloudflareDnsZoneTransfersTsig` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersTsig <a name="DataCloudflareDnsZoneTransfersTsig" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsZoneTransfersTsig(Construct Scope, string Id, DataCloudflareDnsZoneTransfersTsigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig">DataCloudflareDnsZoneTransfersTsigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig">DataCloudflareDnsZoneTransfersTsigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.resetTsigId">ResetTsigId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetTsigId` <a name="ResetTsigId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.resetTsigId"></a>

```csharp
private void ResetTsigId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersTsig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersTsig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersTsig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersTsig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersTsig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersTsig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersTsig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersTsig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersTsig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.algo">Algo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.tsigIdInput">TsigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.tsigId">TsigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Algo`<sup>Required</sup> <a name="Algo" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.algo"></a>

```csharp
public string Algo { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `TsigIdInput`<sup>Optional</sup> <a name="TsigIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.tsigIdInput"></a>

```csharp
public string TsigIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `TsigId`<sup>Required</sup> <a name="TsigId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.tsigId"></a>

```csharp
public string TsigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersTsigConfig <a name="DataCloudflareDnsZoneTransfersTsigConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsZoneTransfersTsigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string TsigId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#account_id DataCloudflareDnsZoneTransfersTsig#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.tsigId">TsigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#tsig_id DataCloudflareDnsZoneTransfersTsig#tsig_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#account_id DataCloudflareDnsZoneTransfersTsig#account_id}.

---

##### `TsigId`<sup>Optional</sup> <a name="TsigId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersTsig.DataCloudflareDnsZoneTransfersTsigConfig.property.tsigId"></a>

```csharp
public string TsigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_zone_transfers_tsig#tsig_id DataCloudflareDnsZoneTransfersTsig#tsig_id}.

---



