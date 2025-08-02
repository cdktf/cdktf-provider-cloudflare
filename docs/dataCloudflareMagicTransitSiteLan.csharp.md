# `dataCloudflareMagicTransitSiteLan` Submodule <a name="`dataCloudflareMagicTransitSiteLan` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteLan <a name="DataCloudflareMagicTransitSiteLan" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLan(Construct Scope, string Id, DataCloudflareMagicTransitSiteLanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig">DataCloudflareMagicTransitSiteLanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig">DataCloudflareMagicTransitSiteLanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.resetLanId">ResetLanId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetLanId` <a name="ResetLanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.resetLanId"></a>

```csharp
private void ResetLanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteLan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteLan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteLan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteLan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteLan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitSiteLan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteLan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.haLink">HaLink</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference">DataCloudflareMagicTransitSiteLanNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.physport">Physport</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.routedSubnets">RoutedSubnets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList">DataCloudflareMagicTransitSiteLanRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.vlanTag">VlanTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanIdInput">LanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteIdInput">SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanId">LanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `HaLink`<sup>Required</sup> <a name="HaLink" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.haLink"></a>

```csharp
public IResolvable HaLink { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.nat"></a>

```csharp
public DataCloudflareMagicTransitSiteLanNatOutputReference Nat { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference">DataCloudflareMagicTransitSiteLanNatOutputReference</a>

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.physport"></a>

```csharp
public double Physport { get; }
```

- *Type:* double

---

##### `RoutedSubnets`<sup>Required</sup> <a name="RoutedSubnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.routedSubnets"></a>

```csharp
public DataCloudflareMagicTransitSiteLanRoutedSubnetsList RoutedSubnets { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList">DataCloudflareMagicTransitSiteLanRoutedSubnetsList</a>

---

##### `StaticAddressing`<sup>Required</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.staticAddressing"></a>

```csharp
public DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference StaticAddressing { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference</a>

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.vlanTag"></a>

```csharp
public double VlanTag { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `LanIdInput`<sup>Optional</sup> <a name="LanIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanIdInput"></a>

```csharp
public string LanIdInput { get; }
```

- *Type:* string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteIdInput"></a>

```csharp
public string SiteIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanId"></a>

```csharp
public string LanId { get; }
```

- *Type:* string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteLanConfig <a name="DataCloudflareMagicTransitSiteLanConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string SiteId,
    string LanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.siteId">SiteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lanId">LanId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_transit_site_lan#account_id DataCloudflareMagicTransitSiteLan#account_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.siteId"></a>

```csharp
public string SiteId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_transit_site_lan#site_id DataCloudflareMagicTransitSiteLan#site_id}

---

##### `LanId`<sup>Optional</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lanId"></a>

```csharp
public string LanId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_transit_site_lan#lan_id DataCloudflareMagicTransitSiteLan#lan_id}

---

### DataCloudflareMagicTransitSiteLanNat <a name="DataCloudflareMagicTransitSiteLanNat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanNat {

};
```


### DataCloudflareMagicTransitSiteLanRoutedSubnets <a name="DataCloudflareMagicTransitSiteLanRoutedSubnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanRoutedSubnets {

};
```


### DataCloudflareMagicTransitSiteLanRoutedSubnetsNat <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsNat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsNat {

};
```


### DataCloudflareMagicTransitSiteLanStaticAddressing <a name="DataCloudflareMagicTransitSiteLanStaticAddressing" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanStaticAddressing {

};
```


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay {

};
```


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteLanNatOutputReference <a name="DataCloudflareMagicTransitSiteLanNatOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanNatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.staticPrefix">StaticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat">DataCloudflareMagicTransitSiteLanNat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StaticPrefix`<sup>Required</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.staticPrefix"></a>

```csharp
public string StaticPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteLanNat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat">DataCloudflareMagicTransitSiteLanNat</a>

---


### DataCloudflareMagicTransitSiteLanRoutedSubnetsList <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsList" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.get"></a>

```csharp
private DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix">StaticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat">DataCloudflareMagicTransitSiteLanRoutedSubnetsNat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StaticPrefix`<sup>Required</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```csharp
public string StaticPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteLanRoutedSubnetsNat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat">DataCloudflareMagicTransitSiteLanRoutedSubnetsNat</a>

---


### DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference">DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop">NextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets">DataCloudflareMagicTransitSiteLanRoutedSubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nat"></a>

```csharp
public DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference Nat { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference">DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference</a>

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop"></a>

```csharp
public string NextHop { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteLanRoutedSubnets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets">DataCloudflareMagicTransitSiteLanRoutedSubnets</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses">ServerAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerAddresses`<sup>Required</sup> <a name="ServerAddresses" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```csharp
public string[] ServerAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">DhcpPoolEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">DhcpPoolStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer">DnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations">Reservations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhcpPoolEnd`<sup>Required</sup> <a name="DhcpPoolEnd" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```csharp
public string DhcpPoolEnd { get; }
```

- *Type:* string

---

##### `DhcpPoolStart`<sup>Required</sup> <a name="DhcpPoolStart" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```csharp
public string DhcpPoolStart { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```csharp
public string DnsServer { get; }
```

- *Type:* string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `Reservations`<sup>Required</sup> <a name="Reservations" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```csharp
public StringMap Reservations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay">DhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer">DhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress">SecondaryAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress">VirtualAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing">DataCloudflareMagicTransitSiteLanStaticAddressing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `DhcpRelay`<sup>Required</sup> <a name="DhcpRelay" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay"></a>

```csharp
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference DhcpRelay { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a>

---

##### `DhcpServer`<sup>Required</sup> <a name="DhcpServer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer"></a>

```csharp
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference DhcpServer { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a>

---

##### `SecondaryAddress`<sup>Required</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress"></a>

```csharp
public string SecondaryAddress { get; }
```

- *Type:* string

---

##### `VirtualAddress`<sup>Required</sup> <a name="VirtualAddress" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress"></a>

```csharp
public string VirtualAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteLanStaticAddressing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing">DataCloudflareMagicTransitSiteLanStaticAddressing</a>

---



