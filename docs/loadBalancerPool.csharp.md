# `cloudflare_load_balancer_pool`

Refer to the Terraform Registory for docs: [`cloudflare_load_balancer_pool`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool).

# `loadBalancerPool` Submodule <a name="`loadBalancerPool` Submodule" id="@cdktf/provider-cloudflare.loadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPool <a name="LoadBalancerPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPool(Construct Scope, string Id, LoadBalancerPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig">LoadBalancerPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig">LoadBalancerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding">PutLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins">PutOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering">PutOriginSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions">ResetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude">ResetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding">ResetLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude">ResetLongitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins">ResetMinimumOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail">ResetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering">ResetOriginSteering</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLoadShedding` <a name="PutLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding"></a>

```csharp
private void PutLoadShedding(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding.parameter.value"></a>

- *Type:* object

---

##### `PutOrigins` <a name="PutOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins"></a>

```csharp
private void PutOrigins(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins.parameter.value"></a>

- *Type:* object

---

##### `PutOriginSteering` <a name="PutOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering"></a>

```csharp
private void PutOriginSteering(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering.parameter.value"></a>

- *Type:* object

---

##### `ResetCheckRegions` <a name="ResetCheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions"></a>

```csharp
private void ResetCheckRegions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLatitude` <a name="ResetLatitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude"></a>

```csharp
private void ResetLatitude()
```

##### `ResetLoadShedding` <a name="ResetLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding"></a>

```csharp
private void ResetLoadShedding()
```

##### `ResetLongitude` <a name="ResetLongitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude"></a>

```csharp
private void ResetLongitude()
```

##### `ResetMinimumOrigins` <a name="ResetMinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins"></a>

```csharp
private void ResetMinimumOrigins()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail"></a>

```csharp
private void ResetNotificationEmail()
```

##### `ResetOriginSteering` <a name="ResetOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering"></a>

```csharp
private void ResetOriginSteering()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding">LoadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList">LoadBalancerPoolLoadSheddingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins">Origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering">OriginSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList">LoadBalancerPoolOriginSteeringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput">CheckRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput">LatitudeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput">LoadSheddingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput">LongitudeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput">MinimumOriginsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput">MonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput">OriginsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput">OriginSteeringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions">CheckRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude">Latitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude">Longitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins">MinimumOrigins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor">Monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `LoadShedding`<sup>Required</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding"></a>

```csharp
public LoadBalancerPoolLoadSheddingList LoadShedding { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList">LoadBalancerPoolLoadSheddingList</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins"></a>

```csharp
public LoadBalancerPoolOriginsList Origins { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a>

---

##### `OriginSteering`<sup>Required</sup> <a name="OriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering"></a>

```csharp
public LoadBalancerPoolOriginSteeringList OriginSteering { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList">LoadBalancerPoolOriginSteeringList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CheckRegionsInput`<sup>Optional</sup> <a name="CheckRegionsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput"></a>

```csharp
public string[] CheckRegionsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LatitudeInput`<sup>Optional</sup> <a name="LatitudeInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput"></a>

```csharp
public double LatitudeInput { get; }
```

- *Type:* double

---

##### `LoadSheddingInput`<sup>Optional</sup> <a name="LoadSheddingInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput"></a>

```csharp
public object LoadSheddingInput { get; }
```

- *Type:* object

---

##### `LongitudeInput`<sup>Optional</sup> <a name="LongitudeInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput"></a>

```csharp
public double LongitudeInput { get; }
```

- *Type:* double

---

##### `MinimumOriginsInput`<sup>Optional</sup> <a name="MinimumOriginsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput"></a>

```csharp
public double MinimumOriginsInput { get; }
```

- *Type:* double

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput"></a>

```csharp
public string MonitorInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput"></a>

```csharp
public string NotificationEmailInput { get; }
```

- *Type:* string

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput"></a>

```csharp
public object OriginsInput { get; }
```

- *Type:* object

---

##### `OriginSteeringInput`<sup>Optional</sup> <a name="OriginSteeringInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput"></a>

```csharp
public object OriginSteeringInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions"></a>

```csharp
public string[] CheckRegions { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude"></a>

```csharp
public double Latitude { get; }
```

- *Type:* double

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude"></a>

```csharp
public double Longitude { get; }
```

- *Type:* double

---

##### `MinimumOrigins`<sup>Required</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins"></a>

```csharp
public double MinimumOrigins { get; }
```

- *Type:* double

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor"></a>

```csharp
public string Monitor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPoolConfig <a name="LoadBalancerPoolConfig" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    object Origins,
    string[] CheckRegions = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    double Latitude = null,
    object LoadShedding = null,
    double Longitude = null,
    double MinimumOrigins = null,
    string Monitor = null,
    string NotificationEmail = null,
    object OriginSteering = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name">Name</a></code> | <code>string</code> | A short name (tag) for the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins">Origins</a></code> | <code>object</code> | origins block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions">CheckRegions</a></code> | <code>string[]</code> | A list of regions (specified by region code) from which to run health checks. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description">Description</a></code> | <code>string</code> | Free text description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether to enable (the default) this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#id LoadBalancerPool#id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude">Latitude</a></code> | <code>double</code> | The latitude this pool is physically located at; used for proximity steering. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding">LoadShedding</a></code> | <code>object</code> | load_shedding block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude">Longitude</a></code> | <code>double</code> | The longitude this pool is physically located at; used for proximity steering. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins">MinimumOrigins</a></code> | <code>double</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor">Monitor</a></code> | <code>string</code> | The ID of the Monitor to use for health checking origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | The email address to send health status notifications to. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering">OriginSteering</a></code> | <code>object</code> | origin_steering block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A short name (tag) for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins"></a>

```csharp
public object Origins { get; set; }
```

- *Type:* object

origins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `CheckRegions`<sup>Optional</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions"></a>

```csharp
public string[] CheckRegions { get; set; }
```

- *Type:* string[]

A list of regions (specified by region code) from which to run health checks.

Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://developers.cloudflare.com/load-balancing/reference/region-mapping-api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether to enable (the default) this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#id LoadBalancerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Latitude`<sup>Optional</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude"></a>

```csharp
public double Latitude { get; set; }
```

- *Type:* double

The latitude this pool is physically located at; used for proximity steering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `LoadShedding`<sup>Optional</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding"></a>

```csharp
public object LoadShedding { get; set; }
```

- *Type:* object

load_shedding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `Longitude`<sup>Optional</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude"></a>

```csharp
public double Longitude { get; set; }
```

- *Type:* double

The longitude this pool is physically located at; used for proximity steering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `MinimumOrigins`<sup>Optional</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins"></a>

```csharp
public double MinimumOrigins { get; set; }
```

- *Type:* double

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor"></a>

```csharp
public string Monitor { get; set; }
```

- *Type:* string

The ID of the Monitor to use for health checking origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; set; }
```

- *Type:* string

The email address to send health status notifications to.

This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `OriginSteering`<sup>Optional</sup> <a name="OriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering"></a>

```csharp
public object OriginSteering { get; set; }
```

- *Type:* object

origin_steering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

### LoadBalancerPoolLoadShedding <a name="LoadBalancerPoolLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolLoadShedding {
    double DefaultPercent = null,
    string DefaultPolicy = null,
    double SessionPercent = null,
    string SessionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent">DefaultPercent</a></code> | <code>double</code> | Percent of traffic to shed 0 - 100. Defaults to `0`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy">DefaultPolicy</a></code> | <code>string</code> | Method of shedding traffic. Available values: `""`, `hash`, `random`. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent">SessionPercent</a></code> | <code>double</code> | Percent of session traffic to shed 0 - 100. Defaults to `0`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy">SessionPolicy</a></code> | <code>string</code> | Method of shedding traffic. Available values: `""`, `hash`. Defaults to `""`. |

---

##### `DefaultPercent`<sup>Optional</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent"></a>

```csharp
public double DefaultPercent { get; set; }
```

- *Type:* double

Percent of traffic to shed 0 - 100. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}

---

##### `DefaultPolicy`<sup>Optional</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy"></a>

```csharp
public string DefaultPolicy { get; set; }
```

- *Type:* string

Method of shedding traffic. Available values: `""`, `hash`, `random`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}

---

##### `SessionPercent`<sup>Optional</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent"></a>

```csharp
public double SessionPercent { get; set; }
```

- *Type:* double

Percent of session traffic to shed 0 - 100. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}

---

##### `SessionPolicy`<sup>Optional</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy"></a>

```csharp
public string SessionPolicy { get; set; }
```

- *Type:* string

Method of shedding traffic. Available values: `""`, `hash`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}

---

### LoadBalancerPoolOrigins <a name="LoadBalancerPoolOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOrigins {
    string Address,
    string Name,
    object Enabled = null,
    object Header = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address">Address</a></code> | <code>string</code> | The IP address (IPv4 or IPv6) of the origin, or the publicly addressable hostname. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name">Name</a></code> | <code>string</code> | A human-identifiable name for the origin. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled">Enabled</a></code> | <code>object</code> | Whether this origin is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight">Weight</a></code> | <code>double</code> | The weight (0.01 - 1.00) of this origin, relative to other origins in the pool. Equal values mean equal weighting. A weight of 0 means traffic will not be sent to this origin, but health is still checked. When [`origin_steering.policy="least_outstanding_requests"`](#policy), weight is used to scale the origin's outstanding requests. Defaults to `1`. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The IP address (IPv4 or IPv6) of the origin, or the publicly addressable hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-identifiable name for the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether this origin is enabled.

Disabled origins will not receive traffic and are excluded from health checks. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The weight (0.01 - 1.00) of this origin, relative to other origins in the pool. Equal values mean equal weighting. A weight of 0 means traffic will not be sent to this origin, but health is still checked. When [`origin_steering.policy="least_outstanding_requests"`](#policy), weight is used to scale the origin's outstanding requests. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}

---

### LoadBalancerPoolOriginsHeader <a name="LoadBalancerPoolOriginsHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginsHeader {
    string Header,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.header">Header</a></code> | <code>string</code> | HTTP Header name. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.values">Values</a></code> | <code>string[]</code> | Values for the HTTP headers. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.header"></a>

```csharp
public string Header { get; set; }
```

- *Type:* string

HTTP Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Values for the HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#values LoadBalancerPool#values}

---

### LoadBalancerPoolOriginSteering <a name="LoadBalancerPoolOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginSteering {
    string Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy">Policy</a></code> | <code>string</code> | Origin steering policy to be used. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Origin steering policy to be used.

Value `random` selects an origin randomly. Value `hash` selects an origin by computing a hash over the CF-Connecting-IP address. Value `least_outstanding_requests` selects an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others. Available values: `""`, `hash`, `random`, `least_outstanding_requests`. Defaults to `random`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPoolLoadSheddingList <a name="LoadBalancerPoolLoadSheddingList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolLoadSheddingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.get"></a>

```csharp
private LoadBalancerPoolLoadSheddingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolLoadSheddingOutputReference <a name="LoadBalancerPoolLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolLoadSheddingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent">ResetDefaultPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy">ResetDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent">ResetSessionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy">ResetSessionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultPercent` <a name="ResetDefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent"></a>

```csharp
private void ResetDefaultPercent()
```

##### `ResetDefaultPolicy` <a name="ResetDefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy"></a>

```csharp
private void ResetDefaultPolicy()
```

##### `ResetSessionPercent` <a name="ResetSessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent"></a>

```csharp
private void ResetSessionPercent()
```

##### `ResetSessionPolicy` <a name="ResetSessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy"></a>

```csharp
private void ResetSessionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput">DefaultPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput">DefaultPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput">SessionPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput">SessionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">DefaultPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">DefaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">SessionPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">SessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPercentInput`<sup>Optional</sup> <a name="DefaultPercentInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput"></a>

```csharp
public double DefaultPercentInput { get; }
```

- *Type:* double

---

##### `DefaultPolicyInput`<sup>Optional</sup> <a name="DefaultPolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput"></a>

```csharp
public string DefaultPolicyInput { get; }
```

- *Type:* string

---

##### `SessionPercentInput`<sup>Optional</sup> <a name="SessionPercentInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput"></a>

```csharp
public double SessionPercentInput { get; }
```

- *Type:* double

---

##### `SessionPolicyInput`<sup>Optional</sup> <a name="SessionPolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput"></a>

```csharp
public string SessionPolicyInput { get; }
```

- *Type:* string

---

##### `DefaultPercent`<sup>Required</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```csharp
public double DefaultPercent { get; }
```

- *Type:* double

---

##### `DefaultPolicy`<sup>Required</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```csharp
public string DefaultPolicy { get; }
```

- *Type:* string

---

##### `SessionPercent`<sup>Required</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```csharp
public double SessionPercent { get; }
```

- *Type:* double

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```csharp
public string SessionPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolOriginsHeaderList <a name="LoadBalancerPoolOriginsHeaderList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginsHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.get"></a>

```csharp
private LoadBalancerPoolOriginsHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolOriginsHeaderOutputReference <a name="LoadBalancerPoolOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginsHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.headerInput">HeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.headerInput"></a>

```csharp
public string HeaderInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolOriginsList <a name="LoadBalancerPoolOriginsList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get"></a>

```csharp
private LoadBalancerPoolOriginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolOriginsOutputReference <a name="LoadBalancerPoolOriginsOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList">LoadBalancerPoolOriginsHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header"></a>

```csharp
public LoadBalancerPoolOriginsHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderList">LoadBalancerPoolOriginsHeaderList</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolOriginSteeringList <a name="LoadBalancerPoolOriginSteeringList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginSteeringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.get"></a>

```csharp
private LoadBalancerPoolOriginSteeringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadBalancerPoolOriginSteeringOutputReference <a name="LoadBalancerPoolOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerPoolOriginSteeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



