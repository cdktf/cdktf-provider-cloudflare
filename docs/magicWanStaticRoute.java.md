# `magicWanStaticRoute` Submodule <a name="`magicWanStaticRoute` Submodule" id="@cdktf/provider-cloudflare.magicWanStaticRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanStaticRoute <a name="MagicWanStaticRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRoute;

MagicWanStaticRoute.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .nexthop(java.lang.String)
    .prefix(java.lang.String)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .scope(MagicWanStaticRouteScope)
//  .weight(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.nexthop">nexthop</a></code> | <code>java.lang.String</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Optional weight of the ECMP scope - if provided. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.nexthop"></a>

- *Type:* java.lang.String

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScope` <a name="putScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope"></a>

```java
public void putScope(MagicWanStaticRouteScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetScope"></a>

```java
public void resetScope()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetWeight"></a>

```java
public void resetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRoute;

MagicWanStaticRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRoute;

MagicWanStaticRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRoute;

MagicWanStaticRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRoute;

MagicWanStaticRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicWanStaticRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicWanStaticRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicWanStaticRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanStaticRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference">MagicWanStaticRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthopInput">nexthopInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scopeInput">scopeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthop">nexthop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scope"></a>

```java
public MagicWanStaticRouteScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference">MagicWanStaticRouteScopeOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nexthopInput`<sup>Optional</sup> <a name="nexthopInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthopInput"></a>

```java
public java.lang.String getNexthopInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scopeInput"></a>

```java
public java.lang.Object getScopeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthop"></a>

```java
public java.lang.String getNexthop();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanStaticRouteConfig <a name="MagicWanStaticRouteConfig" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRouteConfig;

MagicWanStaticRouteConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .nexthop(java.lang.String)
    .prefix(java.lang.String)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .scope(MagicWanStaticRouteScope)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.nexthop">nexthop</a></code> | <code>java.lang.String</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Optional weight of the ECMP scope - if provided. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.nexthop"></a>

```java
public java.lang.String getNexthop();
```

- *Type:* java.lang.String

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.scope"></a>

```java
public MagicWanStaticRouteScope getScope();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

### MagicWanStaticRouteScope <a name="MagicWanStaticRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRouteScope;

MagicWanStaticRouteScope.builder()
//  .coloNames(java.util.List<java.lang.String>)
//  .coloRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloNames">coloNames</a></code> | <code>java.util.List<java.lang.String></code> | List of colo names for the ECMP scope. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloRegions">coloRegions</a></code> | <code>java.util.List<java.lang.String></code> | List of colo regions for the ECMP scope. |

---

##### `coloNames`<sup>Optional</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloNames"></a>

```java
public java.util.List<java.lang.String> getColoNames();
```

- *Type:* java.util.List<java.lang.String>

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

##### `coloRegions`<sup>Optional</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloRegions"></a>

```java
public java.util.List<java.lang.String> getColoRegions();
```

- *Type:* java.util.List<java.lang.String>

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicWanStaticRouteScopeOutputReference <a name="MagicWanStaticRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_static_route.MagicWanStaticRouteScopeOutputReference;

new MagicWanStaticRouteScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoNames">resetColoNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoRegions">resetColoRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColoNames` <a name="resetColoNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoNames"></a>

```java
public void resetColoNames()
```

##### `resetColoRegions` <a name="resetColoRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoRegions"></a>

```java
public void resetColoRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNamesInput">coloNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegionsInput">coloRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNames">coloNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegions">coloRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coloNamesInput`<sup>Optional</sup> <a name="coloNamesInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNamesInput"></a>

```java
public java.util.List<java.lang.String> getColoNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coloRegionsInput`<sup>Optional</sup> <a name="coloRegionsInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegionsInput"></a>

```java
public java.util.List<java.lang.String> getColoRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coloNames`<sup>Required</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNames"></a>

```java
public java.util.List<java.lang.String> getColoNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coloRegions`<sup>Required</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegions"></a>

```java
public java.util.List<java.lang.String> getColoRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

---



